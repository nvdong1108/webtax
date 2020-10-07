const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    //  res.set('Cache-Control', 'resources, max-age=300, s-manage=600');
    res.render('pages/index', {
        title: 'Trang chủ',
        active: {
            index: true
        },
        iadmin :true
    });
});
router.get('/about', (req, res) => {
    res.render('pages/about', {
        title: 'Giới thiệu',
        active: {
            about: true
        },
        iadmin :true
    });
});
router.get('/cart', (req, res) => {
    res.render('pages/cart', {
        title: 'Giỏ hàng',
        active: {
            shop: true
        },
        iadmin :true
    });
});
router.get('/checkout', (req, res) => {
    res.render('pages/checkout', {
        title: 'Thanh toán',
        active: {
            shop: true
        }
    });
});
router.get('/contact-us', (req, res) => {
    res.render('pages/contact-us', {
        title: 'Liên hệ',
        active: {
            contactUs: true
        }
    });
});
router.get('/gallery', (req, res) => {
    res.render('pages/gallery', {
        title: 'Hình ảnh',
        active: {
            gallery: true
        },
        iadmin :true
    });
});
router.get('/my-account', (req, res) => {
    res.render('pages/my-account', {
        title: 'Tài khoản',
        active: {
            shop: true
        }
    });
});
router.get('/shop', (req, res) => {
    res.render('pages/shop', {
        title: 'Cửa hàng',
        active: {
            shop: true
        }
    });
});
router.get('/shop-detail', (req, res) => {
    res.render('pages/shop-detail', {
        title: 'Chi tiết',
        active: {
            shop: true
        }
    });
});
router.get('/wishlist', (req, res) => {
    res.render('pages/wishlist', {
        title: 'Ưu thích',
        active: {
            shop: true
        }
    });
});
router.get('/location', (req, res) => {
    res.render('pages/location', {
        title: 'Vị trí',
        active: {
            index: true
        }
    });
});
router.get('/admin', (req, res) => {
    res.render('pages/admin', {
        title: 'Admin',
        active: {
            admin: true
        },
        iadmin :false
    });
});
router.get('/success', (req, res) => {
    res.render('pages/success', {
        title: 'Success',
        active: {
            admin: true
        },
        iadmin :false
    });
});

module.exports = router;