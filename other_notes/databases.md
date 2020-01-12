# Databases

Here are some general notes on databases.

## Types

### Relational

Old standard of database management based on tables organized into columns (representing attributes) and rows (representing a record). Foreign keys are used to relate rows of one table to another (using the one-to-many concept).

Scaling on a single server is very easy, but scaling to a large distributed system is often impeded by the complexity of relationships.

Examples: SQLite, PostgreSQL, MySQL, Oracle DB


### Non-Relational

Non-tabular method for storing data (e.g. MongoDB uses a form of JSON, Neo4J uses a graph). Generally much simpler than relational databases because related data can simply be stored in a single document instead of requiring that several tables be joined together. Non-relational databases generally have good horizontal scaling across distributed systems, with built in load-balancing and auto-sharding.

Examples: MongoDB, Cassandra, Redis, Neo4J

### Operational vs Analytical

This distinction is entirely separate of relational vs non-relational (i.e. a relational DB can be operational or analytical; same is true for non-relational DBs). Operational databses are characterized by frequent, short transactions (CUD actions). Because of this, concurrency and integrity of transactions is very important and so support ACID transactions (atomicity, consistency, isolation, durability). Operational databases are what one would expect to see for a web application like Facebook or Twitter, or banking applications

Analytical databases are typically used to house tons of data where transactions are infrequent and are sometimes called data warehouses. These databases are characterized by complex queries that touch large swaths of data. Think of doing analysis on the past year's weather data or users' Google searches.

Operational DBs: MySQL, MongoDB, Neo4j, Cassandra

Analytical DBs: MapReduce, SQL Server, Oracle, Amazon Redshift


https://www.jamesserra.com/archive/2015/08/relational-databases-vs-non-relational-databases/

## Normalization

"Database normalization is the process of structuring a relational database in accordance with a series of so-called normal forms in order to reduce data redundancy and improve data integrity. It was first proposed by Edgar F. Codd as an integral part of his relational model." - Wikipedia

Database normalization is a set of rules applied to relational databases, and is followed for three reasons: 1. to prevent data duplication, 2. to minimize modifcation/updating issues, and 3. to simplify queries. To do this, the most important to followis the single-source of truth principle, which states that each table should be resposible for storing information about a single type of thing, and each row should be responsible for storing information about a single thing. The principles behind one-to-many and many-to-many relationships using foreign keys and join tables follows from this.

There are three forms of normalization: 1st, 2nd, and 3rd normal forms.

"
First Normal Form – The information is stored in a relational table and each column contains atomic values, and there are not repeating groups of columns.
Second Normal Form – The table is in first normal form and all the columns depend on the table’s primary key.
Third Normal Form – the table is in second normal form and all of its columns are not transitively dependent on the primary key
"

https://www.essentialsql.com/get-ready-to-learn-sql-database-normalization-explained-in-simple-english/

https://www.geeksforgeeks.org/database-normalization-normal-forms/


## Indexing

"A database index is a data structure that improves the speed of data retrieval operations on a database table at the cost of additional writes and storage space to maintain the index data structure. Indexes are used to quickly locate data without having to search every row in a database table every time a database table is accessed. Indexes can be created using one or more columns of a database table, providing the basis for both rapid random lookups and efficient access of ordered records." - Wikipedia

To index a field, a separate data structure (a binary tree) is created. Contained in this data structure is value of the field (sometimes called the "search key") and a pointer to the original record. This data structure (the index), is then sorted which allows Binary Searches to be performed (Time complexity O(logN)).

For instance, given the following table,

```
id | name | age
---------------
1  | Kara | 28
2  | Ben  | 23
3  | Jon  | 32
4  | Alex | 17

```

indexing by name would create a secondary structure that looks like the following

```
search_value | data_reference
-----------------------------
Alex         | 4
Ben          | 2
Jon          | 3
Kara         | 1
```


Pros: Speeds up searches on a particular field in a database
Cons: Requires a supporting data structure that takes up a lot of space. 

When `INSERT`, `UPDATE`, or `DELETE` are used, the index data structure also needs to be updated. This means that databases that are high-write, but low-read are not good for indexing, as all of the write operations will take longer.

Because the search relies on a binary tree, indexing is not good for databases with low cardinality (cardinality is the number of distinct values in the tree). This is because binary trees rely on the fact that when you search, you can eliminate half of the values by choosing the middle-most value and comparing to the target value. High cardinality trees have a distribution of 
unique values so long as the tree remains balanced, but low cardinality trees are inevitably unbalanced and the O(log(n)) time is lost.


*Concatenated (Composite) Index*

Concatenated or composite indices are the combination of multiple fields to create a single index. Order of concatenation matters.

Think of a phone book, which is ordered by last name then ordered by first name: using the first name to find someone in the phone book would be useless. Instead, one could look someone up by last name and then search within that subset for their first name. Or one could just find all people with that last name.

For example: if you have a concatenated index made up of 3 columns, last_name, first_name, date_of_birth you could do a look-up using just the last_name; the last_name and first_name; or all three columns.


Consider a table like so,
```
id | name | age
---------------
1  | Kara | 28
2  | Ben  | 23
3  | Jon  | 32
4  | Alex | 17
5  | Ben  | 43
6  | Kara | 13

```

an index concatenated on name then age might look like this:

```
search_value | data_reference
-----------------------------
Alex17       | 4
Ben23        | 2
Ben43        | 5
Jon32        | 3
Kara13       | 6
Kara28       | 1

```

whereas an index concatenated on age then name might look like this:

```
search_value | data_reference
-----------------------------
13Kara       | 6
17Alex       | 4
23Ben        | 2
28Kara       | 1
32Jon        | 3
43Ben        | 5

```


*Hashed Indices*

A different form of an index exists as a hash map, where the search values are run through a hashing function - the resultant hash is used to determine which bucket to put the value and its pointer. This means that there is an O(1) read time, assuming low collisions on the hash map.


## Links

[DB Indexing](https://stackoverflow.com/questions/1108/how-does-database-indexing-work)
[Geeks for Geeks DB Indexing](https://www.geeksforgeeks.org/indexing-in-databases-set-1/)
[Concatenated Keys](https://use-the-index-luke.com/sql/where-clause/the-equals-operator/concatenated-keys)
[Composite Indexing](https://medium.com/@User3141592/single-vs-composite-indexes-in-relational-databases-58d0eb045cbe)

