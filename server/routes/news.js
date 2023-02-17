const News = require("../models/news");
const _ = require("lodash");
const router = require("express").Router();

//GET NEWS ALL
router.get("/", async (req, res) => {
  try {
    const news = await News.find();
    res.status(200).json(news);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

//CREATE PRODUCT
router.post("/create", async (req, res) => {
  // console.log(req.body);
  const newArticle = new News(req.body);
  try {
    const savedProduct = await newArticle.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET NEWS AGGREGATED COUNTRY
router.get("/find/country", async (req, res) => {
  try {
    const news = await News.aggregate([
      {
        $group: { _id: "$country", total: { $sum: 1 } },
      },
      { $sort: { total: -1 } },
    ]);
    res.status(200).json(news);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

//GET NEWS ACCORDING TO COUNTRY
router.get("/find/country/:countryId", async (req, res) => {
  try {
    var str = req.params.countryId;
    // var replaced = str.split("-").join(" ");
    replaced = _.lowerCase(str);
    // console.log(replaced);
    const news = await News.aggregate([
      {
        $addFields: {
          countryLower: { $toLower: "$country" },
        },
      },
      {
        $match: {
          countryLower: replaced,
        },
      },
      {
        $project: {
          countryLower: 0,
        },
      },
    ]);
    res.status(200).json(news);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET NEWS AGGREGATED SOURCE
router.get("/find/source", async (req, res) => {
  try {
    const news = await News.aggregate([
      {
        $group: { _id: "$source", total: { $sum: 1 } },
      },
      { $sort: { total: -1 } },
    ]);
    res.status(200).json(news);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET NEWS ACCORDING TO SOURCE
router.get("/find/source/:sourceId", async (req, res) => {
  try {
    var str = req.params.sourceId;
    replaced = _.lowerCase(str);
    // console.log(replaced);
    const news = await News.aggregate([
      {
        $addFields: {
          sourceLower: { $toLower: "$source" },
        },
      },
      {
        $match: {
          sourceLower: replaced,
        },
      },
      {
        $project: {
          sourceLower: 0,
        },
      },
    ]);
    res.status(200).json(news);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET NEWS AGGREGATED TOPIC
router.get("/find/topic", async (req, res) => {
  try {
    const news = await News.aggregate([
      {
        $group: { _id: "$topic", total: { $sum: 1 } },
      },
      { $sort: { total: -1 } },
    ]);
    res.status(200).json(news);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});
//GET NEWS ACCORDING TO TOPIC
router.get("/find/topic/:topicId", async (req, res) => {
  try {
    const news = await News.find({ topic: req.params.topicId });
    res.status(200).json(news);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET NEWS AGGREGATED TOPIC
router.get("/find/region", async (req, res) => {
  try {
    const news = await News.aggregate([
      {
        $group: { _id: "$region", total: { $sum: 1 } },
      },
      { $sort: { total: -1 } },
    ]);
    res.status(200).json(news);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

//GET NEWS ACCORDING TO REGION
router.get("/find/region/:regionId", async (req, res) => {
  try {
    var str = req.params.regionId;
    replaced = _.lowerCase(str);
    // console.log(replaced);
    const news = await News.aggregate([
      {
        $addFields: {
          regionLower: { $toLower: "$region" },
        },
      },
      {
        $match: {
          regionLower: replaced,
        },
      },
      {
        $project: {
          regionLower: 0,
        },
      },
    ]);
    res.status(200).json(news);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET NEWS AGGREGATED TOPIC
router.get("/find/pestle", async (req, res) => {
  try {
    const news = await News.aggregate([
      {
        $group: { _id: "$pestle", total: { $sum: 1 } },
      },
      { $sort: { total: -1 } },
    ]);
    res.status(200).json(news);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

//GET NEWS ACCORDING TO REGION
router.get("/find/pestle/:pestleId", async (req, res) => {
  try {
    var str = req.params.pestleId;
    replaced = _.lowerCase(str);
    // console.log(replaced);
    const news = await News.aggregate([
      {
        $addFields: {
          pestleLower: { $toLower: "$pestle" },
        },
      },
      {
        $match: {
          pestleLower: replaced,
        },
      },
      {
        $project: {
          pestleLower: 0,
        },
      },
    ]);
    res.status(200).json(news);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET NEWS AGGREGATED SECTOR
router.get("/find/sector", async (req, res) => {
  try {
    const news = await News.aggregate([
      {
        $group: { _id: "$sector", total: { $sum: 1 } },
      },
      { $sort: { total: -1 } },
    ]);
    res.status(200).json(news);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

//GET NEWS ACCORDING TO REGION
router.get("/find/sector/:sectorId", async (req, res) => {
  try {
    var str = req.params.sectorId;
    replaced = _.lowerCase(str);
    // console.log(replaced);
    const news = await News.aggregate([
      {
        $addFields: {
          sectorLower: { $toLower: "$sector" },
        },
      },
      {
        $match: {
          sectorLower: replaced,
        },
      },
      {
        $project: {
          sectorLower: 0,
        },
      },
    ]);
    res.status(200).json(news);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET NEWS ACCORDING TO RELEVANCE BY SOURCE
router.get("/find/source/:sourceId/relevance", async (req, res) => {
  try {
    var str = req.params.sourceId;
    replaced = _.lowerCase(str);
    // console.log(replaced);
    const news = await News.aggregate([
      {
        $addFields: {
          sourceLower: { $toLower: "$source" },
        },
      },
      {
        $match: {
          sourceLower: replaced,
        },
      },
      {
        $group: {
          _id: "$sourceLower",
          avg: { $avg: "$relevance" },
        },
      },
      { $sort: { avg: -1 } },
      {
        $project: {
          sourceLower: 0,
        },
      },
    ]);
    res.status(200).json(news);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET NEWS ACCORDING TO INTENSITY BY TOPIC
router.get("/find/topic/:topicId/intensity", async (req, res) => {
  try {
    var str = req.params.topicId;
    replaced = _.lowerCase(str);
    // console.log(replaced);
    const news = await News.aggregate([
      {
        $addFields: {
          topicLower: { $toLower: "$topic" },
        },
      },
      {
        $match: {
          topicLower: replaced,
        },
      },
      {
        $group: {
          _id: "$topicLower",
          avg: { $avg: "$intensity" },
        },
      },
      { $sort: { avg: -1 } },
      {
        $project: {
          topicLower: 0,
        },
      },
    ]);
    res.status(200).json(news);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
