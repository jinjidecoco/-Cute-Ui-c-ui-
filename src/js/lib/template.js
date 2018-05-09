var template = require("art-template");

template.config("base", "");
template.config("extname", ".html");
template.config("cache", false);

// 关闭编码html字符
template.config('escape', false)




module.exports = template;