import db from "../models/index"



let createChuyenBay = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.tgkhoihanh || !data.tgden || !data.tgbaydukien || !data.dichden) {
                resolve({
                    errCode: 1,
                    errMessage: "Missing params input type"
                })
            } else {
                let res = {}
                let resData = await db.ChuyenBay.create({
                    tgkhoihanh: data.tgkhoihanh,
                    tgden: data.tgden,
                    tgbaydukien: data.tgbaydukien,
                    xuatphat: data.xuatphat,
                    dichden: data.dichden,
                    soghetrong: data.soghetrong,
                    tinhtrang: data.tinhtrang
                })
                res.errCode = 0
                res.message = 'Tạo chuyến bay thành công'
                res.data = resData
                resolve(res)
            }
        } catch (e) {
            reject(e)
        }
    })
}

let getAllChuyenbay = (Input) => {
    return new Promise(async (resolve, reject) => {
        try {
            let chuyenbay = ''
            if (Input === 'ALL') {
                chuyenbay = await db.ChuyenBay.findAll()
            }
            if (Input && Input !== 'ALL') {
                chuyenbay = await db.ChuyenBay.findOne({ where: { id: Input } })
            }
            resolve(chuyenbay)
        }
        catch (e) {
            console.log(e)
            reject(e)
        }
    })
}

let editChuyenbay = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id) {
                resolve({
                    errCode: 1,
                    message: 'Missing required id'
                })
            }
            let chuyenbay = await db.ChuyenBay.findOne({
                where: { id: data.id },
                raw: false
            })
            if (chuyenbay) {
                chuyenbay.tgkhoihanh = data.tgkhoihanh,
                    chuyenbay.tgden = data.tgden,
                    chuyenbay.tgbaydukien = data.tgbaydukien,
                    chuyenbay.xuatphat = data.xuatphat,
                    chuyenbay.dichden = data.dichden,
                    chuyenbay.soghetrong = data.soghetrong,
                    chuyenbay.tinhtrang = data.tinhtrang
                await chuyenbay.save()

                resolve({
                    errCode: 0,
                    message: 'Cập nhật chuyến bay thành công',
                    data: chuyenbay
                })
            } else {
                resolve({
                    errCode: 2,
                    message: `Chuyến bay không tồn tại trong hệ thống`
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let deleteChuyenbay = (Id) => {
    return new Promise(async (resolve, reject) => {
        let chuyenbay = await db.ChuyenBay.findOne({
            where: { id: Id }
        })
        if (!chuyenbay) {
            resolve({
                errCode: 2,
                message: `Chuyến bay không tồn tại trong hệ thống`
            })
        }
        await db.ChuyenBay.destroy({
            where: { id: Id }
        })
        resolve({
            errCode: 0,
            message: `Đã xóa chuyến bay thành công`
        })
    })
}

module.exports = {
    createChuyenBay,
    getAllChuyenbay,
    editChuyenbay,
    deleteChuyenbay
}
