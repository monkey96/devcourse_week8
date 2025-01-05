const express = require('express');
const router = express.Router();
router.use(express.json());

const {
    bookListing,
    bookSelect
} = require('../controller/bookController')


// 전체 도서 조회 + 카테고리별별
router.get('/', bookListing);
// 개별 도서 조회
router.get('/:id', bookSelect);



module.exports = router;