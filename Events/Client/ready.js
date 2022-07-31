module.exports = {
    name: "ready",
    once: true,
    execute(client) {
        console.log(`${client.name} đã sẵn sàng hoạt động!`)
    }
}