// Rodar com IPV4: npx json-server --watch -d 180 --host "meu ip" debugger.json
import axios from "axios"

const api = axios.create({
    baseURL: "http://192.168.0.25:3000/"
})

export default api;