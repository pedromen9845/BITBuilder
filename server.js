import express from 'express'; 
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';

import uiRoute from "./ui/ui.route";
import pageRoute from './page/page.route';

//setup express app
const app = express()
app.use(express.json());
app.use(cors());

//setup template engine
app.use("/dist", express.static(path.join(__dirname,"dist")));
app.use("/views", express.static(path.join(__dirname,"views")));

//mongo db settings

const mongoUri = 'mongodb://127.0.0.1:27017/webpage_builder';
    
(async () => {
    try {
      await mongoose.connect(mongoUri, {});
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  })();
 
 
app.set('view engine', 'hbs');
app.use("/pages", pageRoute)
app.use('/', uiRoute);


/*app.get('/', (req, res)=> {
    res.render("home", {title: 'Website Builder'  });
});*/

app.use("/", uiRoute);

const PORT = process.env.PORT || 8085
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});
