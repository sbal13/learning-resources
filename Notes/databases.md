## Databases

Here are some general notes on databases.

### Types/Implementations

#### Relational

*SQLite*

*PostgreSQL*

*MySQL*

#### Non-Relational

*MongoDB*

*Cassandra*

*Redis*


### Indexing

"A database index is a data structure that improves the speed of data retrieval operations on a database table at the cost of additional writes and storage space to maintain the index data structure. Indexes are used to quickly locate data without having to search every row in a database table every time a database table is accessed. Indexes can be created using one or more columns of a database table, providing the basis for both rapid random lookups and efficient access of ordered records." - Wikipedia

Pros: Speeds up searches on a particular field in a database
Cons: Requires a supporting data structure that takes up a lot of space. 

When `INSERT`, `UPDATE`, or `DELETE` are used, the index data structure also needs to be updated. This means that databases that are high-write, but low-read are not good for indexing, as all of the write operations will take longer.

To index a field, a separate data structure (a binary tree) is created. Contained in this data structure is value of the field and a pointer to the original record. This data structure (the index), is then sorted which allows Binary Searches to be performed (Time complexity O(logN)).

Because the search relies on a binary tree, indexing is not good for databases with low cardinality (cardinality is the number of distinct values in the tree). This is because binary trees rely on the fact that when you search, you can eliminate half of the values by choosing the middle-most value and comparing to the target value. High cardinality trees have a distribution of 
unique values so long as the tree remains balanced, but low cardinality trees are inevitably unbalanced and the O(log(n)) time is lost.


*Concatenated (Composite) Index*

Concatenated or composite indices are the combination of multiple fields to create a single index. Order of concatenation matters.

Think of a phone book, which is ordered by last name then ordered by first name: using the first name to find someone in the phone book would be useless. Instead, one could look someone up by last name and then search within that subset for their first name. Or one could just find all people with that last name.

For example: if you have a concatenated index made up of 3 columns, last_name, first_name, date_of_birth you could do a look-up using just the last_name; the last_name and first_name; or all three columns.


https://stackoverflow.com/questions/1108/how-does-database-indexing-work

https://use-the-index-luke.com/sql/where-clause/the-equals-operator/concatenated-keys

https://medium.com/@User3141592/single-vs-composite-indexes-in-relational-databases-58d0eb045cbe