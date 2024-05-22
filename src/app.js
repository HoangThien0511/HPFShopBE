import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import "dotenv/config";

// Router
import router_vouchers from "./routes/router_vouchers"
import router_sizes from "./routes/router_sizes";
import router_categories from "./routes/router_categories";
import router_products from "./routes/router_products";
import router_image from "./routes/router_image";
import router_auth from "./routes/router_auth";
import router_user from "./routes/router_user";
import router_search from "./routes/router_search";
import router_order from "./routes/router_order";
import router_cart from "./routes/router_carts";




import admin from "firebase-admin";
import serviceAccount from "../serviceAccountKey.json";
import { Server } from "socket.io";
import http from "http";

// Router tổng sẽ được import sau dòng này

const app = express();

const httpServer = http.createServer(app);
export const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET"],
  },
});

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
mongoose.set('strictQuery', false);
app.use(cors());
app.use(express.json());

// Router tổng sẽ viết sau dòng này, mỗi router đểu phải có chú thích phía sau như vd bên dưới

app.use("/api", router_sizes); //Router size
app.use("/api", router_categories) //Router categories
app.use("/api", router_vouchers) //Router vouchers
app.use("/api", router_products) //Router products
app.use("/api", router_image) //Router images
app.use("/api", router_auth) //Router images
app.use("/api", router_user); // Router User
app.use("/api", router_search); // Router Search
app.use("/api", router_cart); // Router Cart
app.use("/api", router_order); // Router Order



// Ket noi database
mongoose.connect("mongodb+srv://thienhn0511:QMFPKmbXfv2mxtvR@cluster0-hoangthiendev.xp0zuix.mongodb.net/shopping?retryWrites=true&w=majority&appName=Cluster0-HoangThienDev", () => {
  console.log("successfully!");
});

app.listen(process.env.PORT, () => {
  console.log("Kết nối thành công, cổng " + process.env.PORT);
});