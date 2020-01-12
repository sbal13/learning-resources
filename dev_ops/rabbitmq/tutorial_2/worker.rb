require 'bunny'

# Connect to RabbitMQ server
connection = Bunny.new(host: 'localhost')
connection.start

channel = connection.create_channel

# Argument to queue must be string matching queue to be joined
queue = channel.queue('hello')

queue.subscribe(block: true) do |delivery_info, _properties, body|
  puts " [x] Received #{body}"
  # imitate some work
  sleep body.count('.').to_i
  puts ' [x] Done'
end