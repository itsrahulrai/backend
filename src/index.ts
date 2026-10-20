
import express, {Request, Response} from "express";
const app = express();
const PORT = 8080;

app.get("/", (req: Request, res: Response) => {
    res.json({ message: "Hello World! of the backend" });
//   res.send("Hello World! of the backend");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
