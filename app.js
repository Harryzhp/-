// var request = require('sync-request');
// var res = request('POST', 'https://wfw.scu.edu.cn/a_scu/api/sso/check', {
//     headers: {
//         'Host': 'wfw.scu.edu.cn',
       
//         'Referer':' https://wfw.scu.edu.cn/site/polymerization/polymerizationLogin?redirect=https%3A%2F%2Fwfw.scu.edu.cn%2Fncov%2Fwap%2Fdefault%2Findex&from=wap',

//         'Accept-Language': 'en-US,en;q=0.5',

//         'Accept-Encoding': 'gzip, deflate',



//         'Content-Type': 'application/x-www-form-urlencoded',

//         'X-Requested-With': 'XMLHttpRequest',

//         'Content-Length': ' 107',

//         'Connection': 'close'

//     },


//     body: "username=" + 2018141463137 + "password=" + 721721 + "redirect=" + 'https%3A%2F%2Fwfw.scu.edu.cn%2Fncov%2Fwap%2Fdefault%2Findex'
// });
//  console.log(res.getBody('utf8'));


//  // var postData=QueryString.stringify({
// //     'username':2018141463137,
// //     'password':721721

// // })
// // var options = {
// //     'Host': 'wfw.scu.edu.cn',

// //     'Accept-Language': 'en-US,en;q=0.5',

// //     'Accept-Encoding': 'gzip, deflate',

// //     'Content-Type': 'application/x-www-form-urlencoded',

// //     'X-Requested-With': 'XMLHttpRequest',

// //     'Content-Length': ' 107',

// //     'Connection': 'close',
// //     headers:{
// //         'Content-Type': 'application/x-www-form-urlencoded',
// //         'Content-Length': postData.length
// //     }
// // }

/**
 * nodejs的request模块模拟登陆开源中国
 */
//密码加密模块

var request = require('request');
var time =require('china-time')
var schedule = require('node-schedule');

//登陆post地址
let url = 'https://wfw.scu.edu.cn/a_scu/api/sso/check';

//设置头部
let headers = {
    'User-Agent': `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36`,
};
//post 内容
let opts = {
    url: url,
    method: 'POST',
    headers: headers,
    form:'username=2018141463137&password=721721'
};

//模拟登陆



const scheduleCronstyle = () => {
    schedule.scheduleJob('0 0 12 * * *', () => {
        console.log(time('YYYYMMDD'))
        request(opts, (err, res, body) => {
            let opts = {
                url: 'https://wfw.scu.edu.cn/ncov/wap/default/save',
                headers: {
                    'User-Agent': `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36`,
                    Cookie: res.headers['set-cookie'],
                },
                form: `uid=32019&date=${time('YYYYMMDD')-1}&tw=3&sfcxtz=0&sfyyjc=0&jcjgqr=0&jcjg=&sfjcbh=0&sfcxzysx=0&qksm=&remark=&address=%E5%9B%9B%E5%B7%9D%E7%9C%81%E6%88%90%E9%83%BD%E5%B8%82%E9%9D%92%E7%BE%8A%E5%8C%BA%E8%A5%BF%E5%BE%A1%E6%B2%B3%E8%A1%97%E9%81%93%E5%AF%8C%E5%8A%9B%E4%B8%AD%E5%BF%83&area=%E5%9B%9B%E5%B7%9D%E7%9C%81+%E6%88%90%E9%83%BD%E5%B8%82+%E9%9D%92%E7%BE%8A%E5%8C%BA&province=%E5%9B%9B%E5%B7%9D%E7%9C%81&city=%E6%88%90%E9%83%BD%E5%B8%82&geo_api_info=%7B%22type%22%3A%22complete%22%2C%22position%22%3A%7B%22P%22%3A30.664287923178%2C%22O%22%3A104.06921440972303%2C%22lng%22%3A104.069214%2C%22lat%22%3A30.664288%7D%2C%22location_type%22%3A%22html5%22%2C%22message%22%3A%22Get+ipLocation+failed.Get+geolocation+success.Convert+Success.Get+address+success.%22%2C%22accuracy%22%3A25000%2C%22isConverted%22%3Atrue%2C%22status%22%3A1%2C%22addressComponent%22%3A%7B%22citycode%22%3A%22028%22%2C%22adcode%22%3A%22510105%22%2C%22businessAreas%22%3A%5B%7B%22name%22%3A%22%E5%A4%AA%E5%8D%87%E8%B7%AF%22%2C%22id%22%3A%22510105%22%2C%22location%22%3A%7B%22P%22%3A30.664302%2C%22O%22%3A104.076191%2C%22lng%22%3A104.076191%2C%22lat%22%3A30.664302%7D%7D%2C%7B%22name%22%3A%22%E8%A5%BF%E5%8D%8E%22%2C%22id%22%3A%22510105%22%2C%22location%22%3A%7B%22P%22%3A30.663111%2C%22O%22%3A104.062704%2C%22lng%22%3A104.062704%2C%22lat%22%3A30.663111%7D%7D%2C%7B%22name%22%3A%22%E6%A2%93%E6%BD%BC%22%2C%22id%22%3A%22510104%22%2C%22location%22%3A%7B%22P%22%3A30.659651%2C%22O%22%3A104.079793%2C%22lng%22%3A104.079793%2C%22lat%22%3A30.659651%7D%7D%5D%2C%22neighborhoodType%22%3A%22%E5%95%86%E5%8A%A1%E4%BD%8F%E5%AE%85%3B%E4%BD%8F%E5%AE%85%E5%8C%BA%3B%E4%BD%8F%E5%AE%85%E5%B0%8F%E5%8C%BA%22%2C%22neighborhood%22%3A%22%E5%AF%8C%E4%B8%BD%C2%B7%E5%8F%B2%E4%B8%B9%E5%B0%BC%E5%9B%BD%E9%99%85%E5%85%AC%E5%AF%93%22%2C%22building%22%3A%22%E5%AF%8C%E5%8A%9B%E4%B8%AD%E5%BF%83%22%2C%22buildingType%22%3A%22%E5%95%86%E5%8A%A1%E4%BD%8F%E5%AE%85%3B%E6%A5%BC%E5%AE%87%3B%E5%95%86%E5%8A%A1%E5%86%99%E5%AD%97%E6%A5%BC%22%2C%22street%22%3A%22%E4%BA%BA%E6%B0%91%E4%B8%AD%E8%B7%AF%22%2C%22streetNumber%22%3A%22131%E5%8F%B7%22%2C%22province%22%3A%22%E5%9B%9B%E5%B7%9D%E7%9C%81%22%2C%22city%22%3A%22%E6%88%90%E9%83%BD%E5%B8%82%22%2C%22district%22%3A%22%E9%9D%92%E7%BE%8A%E5%8C%BA%22%2C%22township%22%3A%22%E8%A5%BF%E5%BE%A1%E6%B2%B3%E8%A1%97%E9%81%93%22%7D%2C%22formattedAddress%22%3A%22%E5%9B%9B%E5%B7%9D%E7%9C%81%E6%88%90%E9%83%BD%E5%B8%82%E9%9D%92%E7%BE%8A%E5%8C%BA%E8%A5%BF%E5%BE%A1%E6%B2%B3%E8%A1%97%E9%81%93%E5%AF%8C%E5%8A%9B%E4%B8%AD%E5%BF%83%22%2C%22roads%22%3A%5B%5D%2C%22crosses%22%3A%5B%5D%2C%22pois%22%3A%5B%5D%2C%22info%22%3A%22SUCCESS%22%7D&created=1585981450&sfzx=0&sfjcwhry=0&sfcyglq=0&gllx=&glksrq=&jcbhlx=&jcbhrq=&sftjwh=0&sftjhb=0&fxyy=&bztcyy=1&fjsj=0&sfjchbry=0&sfjcqz=&jcqzrq=&jcwhryfs=&jchbryfs=&xjzd=&szgj=&sfsfbh=0&szsqsfybl=0&sfsqhzjkk=&sqhzjkkys=&sfygtjzzfj=0&gtjzzfjsj=&szcs=&id=4091266&gwszdd=&sfyqjzgc=&jrsfqzys=&jrsfqzfy=&szgjcs=&ismoved=0`

            }
            request(opts, (err, res, body) => {
                console.log(body)
            })
        });
        
    });
}