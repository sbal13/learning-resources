require 'bunny'

# Connect to RabbitMQ server
connection = Bunny.new(host: 'localhost')
connection.start

channel = connection.create_channel

# declare a queue to send to
queue = channel.queue('hello')

message = ARGV.empty? ? 'Hello World!' : ARGV.join(' ')

queue.publish(message, persistent: true)
puts " [x] Sent #{message}"