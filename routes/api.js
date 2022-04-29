const express = require("express");
const cheerio = require("cheerio");
const axios = require("axios");
const router = express.Router();

const data = [
    {
        confirmed:"",
        recovered:"",
        deaths:""
    },
    {
        allCountry:[
            {
                count:"",
            },
            {
                count:"",
            },
            {
                count:"",
            },
            {
                count:"",
            },
            {
                count:"",
            },
            {
                count:"",
            },
            {
                count:"",
            },
            {
                count:"",
            },
            {
                count:"",
            },
            {
                count:"",
            },
            {
                count:"",
            },
            {
                count:"",
            },
            {
                count:"",
            },
            {
                count:"",
            },
            {
                count:"",
            },
            {
                count:"",
            },
            {
                count:"",
            },
            {
                count:"",
            },
            {
                count:"",
            },
            {
                count:"",
            },
            {
                count:"",
            },
            {
                count:""
            }
        ]
    }
];
// console.log(data);

async function getPage() {
    const res = await axios.get("https://covid-19.nchc.org.tw/dt_005-covidTable_taiwan.php");
    const $ = cheerio.load(res.data);
    // console.log(res);
    const confirmed = $(".country_confirmed").html();
    const recovered  = $(".country_recovered").html();
    const deaths = $(".country_deaths").html();
    data[0].confirmed = confirmed;
    data[0].recovered = recovered;
    data[0].deaths = deaths;
    // console.log(data[0].confirmed);
    // console.log(data[0].recovered);
    // console.log(data[0].deaths);

    let country = ["新北市","台北市","桃園市","苗栗縣","基隆市","彰化縣","台中市","宜蘭縣","新竹縣","花蓮縣","高雄市","台南市","新竹市","屏東縣","南投縣","台東縣","雲林縣","嘉義縣","嘉義市","澎湖縣","連江縣","金門縣"];
    //遍歷所有標籤
    const countryDiv = $(".btn-success span span").each((i, el2) => {
        for (let j=i;j<data[1].allCountry.length;j++){
            const count = $(el2).html();
            data[1].allCountry[i].country = country[i];
            data[1].allCountry[i].count = count;
        }
    });
};
getPage();

// https://localhost:3000/api/covid-19
router.get('/covid-19', function(req,res,next) {
    res.send({
        success: true,
        data
    }).end();
});

module.exports = router;
