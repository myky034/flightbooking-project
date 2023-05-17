import db from "../models/index"



let createHangVe = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.tenhangve || !data.loaive || !data.giavecoban) {
                resolve({
                    errCode: 1,
                    errMessage: "Missing params input type"
                })
            } else {
                let res = {}
                let resData = await db.HangVe.create({
                    tenhangve: data.tenhangve,
                    loaive: data.loaive,
                    giavecoban: data.giavecoban
                })
                res.errCode = 0
                res.message = 'Tạo hạng vé thành công'
                res.data = resData
                resolve(res)
            }
        } catch (e) {
            reject(e)
        }
    })
}

let getAllHangVe = (Input) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hangve = ''
            if (Input === 'ALL') {
                hangve = await db.HangVe.findAll()
            }
            if (Input && Input !== 'ALL') {
                hangve = await db.HangVe.findOne({ where: { id: Input } })
            }
            resolve(hangve)
        }
        catch (e) {
            console.log(e)
            reject(e)
        }
    })
}

let editHangVe = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id) {
                resolve({
                    errCode: 1,
                    message: 'Missing required id'
                })
            }
            let hangve = await db.HangVe.findOne({
                where: { id: data.id },
                raw: false
            })
            if (hangve) {
                hangve.tenhangve = data.tenhangve,
                    hangve.loaive = data.loaive,
                    hangve.giavecoban = data.giavecoban
                await hangve.save()

                resolve({
                    errCode: 0,
                    message: 'Cập nhật hạng vé thành công',
                    data: hangve
                })
            } else {
                resolve({
                    errCode: 2,
                    message: `Hạng vé không tồn tại trong hệ thống`
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let deleteHangVe = (Id) => {
    return new Promise(async (resolve, reject) => {
        let hangve = await db.HangVe.findOne({
            where: { id: Id }
        })
        if (!hangve) {
            resolve({
                errCode: 2,
                message: `Hạng vé không tồn tại trong hệ thống`
            })
        }
        await db.HangVe.destroy({
            where: { id: Id }
        })
        resolve({
            errCode: 0,
            message: `Đã xóa hạng vé thành công`
        })
    })
}

module.exports = {
    createHangVe,
    getAllHangVe,
    editHangVe,
    deleteHangVe
}
