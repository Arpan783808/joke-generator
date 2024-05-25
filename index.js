import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
const app=express();

app.use(express.json());

app.set("view engine", "ejs");
const API_URL = "https://v2.jokeapi.dev/joke";
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      API_URL+"/Any"
    );
    const joke = response.data;
    res.render("index", { joke });
  } catch (error) {
    res.status(500).send("Error fetching joke");
  }
});
app.get("/getjoke",async (req,res)=>{
    try{
        const result=await axios.get(API_URL+"/Any");
        
        const joke=result.data;
        console.log(joke);
        // console.log(joke1);
        res.render("index.ejs",{joke});
    }
    catch(error){
        res.render("index.ejs",{error});
    }
})
app.get("/getdark", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/Dark");

    const joke = result.data;
    console.log(joke);
    // console.log(joke1);
    res.render("index.ejs", { joke });
  } catch (error) {
    res.render("index.ejs", { error });
  }
});
app.get("/getprog", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/Programming");

    const joke = result.data;
    console.log(joke);
    // console.log(joke1);
    res.render("index.ejs", { joke });
  } catch (error) {
    res.render("index.ejs", { error });
  }
});
app.get("/getpun", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/Pun");

    const joke = result.data;
    console.log(joke);
    // console.log(joke1);
    res.render("index.ejs", { joke });
  } catch (error) {
    res.render("index.ejs", { error });
  }
});
app.get("/getspooky", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/Spook");

    const joke = result.data;
    console.log(joke);
    // console.log(joke1);
    res.render("index.ejs", { joke });
  } catch (error) {
    res.render("index.ejs", { error });
  }
});

app.listen(5000,()=>{
    console.log("app listening at port 5000");
})