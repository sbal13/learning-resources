require 'bunny'
require 'byebug'

# Connect to RabbitMQ server
connection = Bunny.new(host: 'localhost')
connection.start

channel = connection.create_channel

# declare a queue to send to
queue = channel.queue('hello')

# Publish message to queue
channel.default_exchange.publish('Hello World!', routing_key: queue.name)
puts " [x] Sent 'Hello World!'"


connection.close
