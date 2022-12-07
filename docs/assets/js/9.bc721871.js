(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{284:function(t,a,r){"use strict";r.r(a);var e=r(7),s=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),a("h2",{attrs:{id:"搭建失败或系统报错的常见解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#搭建失败或系统报错的常见解决方案"}},[t._v("#")]),t._v(" 搭建失败或系统报错的常见解决方案")]),t._v(" "),a("p",[t._v("有以下几个方案，可以按照顺序依次尝试，修复力度逐层递增。")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("关闭防火墙：如果开放了对应的端口，但是访问不了域名或者控制面板，以下为常用关闭防火墙的命令，仅供参考。")]),t._v(" "),a("ul",[a("li",[t._v("CentOS："),a("code",[t._v("systemctl disable firewalld")])]),t._v(" "),a("li",[t._v("Debian/Ubuntu："),a("code",[t._v("sudo ufw disable")])])])]),t._v(" "),a("li",[a("p",[t._v("故障监测：运行一键安装脚本选择故障检测的选项，对出现运行异常的应用进行单独地卸载重装。")])]),t._v(" "),a("li",[a("p",[t._v("查询系统报错日志：运行一键安装脚本选择日志查询选项，查询对应应用的日志信息，从而进行针对性修复。")])]),t._v(" "),a("li",[a("p",[t._v("重启服务器。")])]),t._v(" "),a("li",[a("p",[t._v("重装系统：有时候搭建失败可能是服务器系统不纯净导致，可以尝试DD系统。")])])]),t._v(" "),a("h2",{attrs:{id:"证书申请失败"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#证书申请失败"}},[t._v("#")]),t._v(" 证书申请失败")]),t._v(" "),a("p",[t._v("Caddy内置"),a("a",{attrs:{href:"https://acme.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("acme"),a("OutboundLink")],1),t._v("\n进行证书申请，且每天申请次数有限制，通常每天超过2次就有很大概率会申请失败，如果申请失败，可以尝试重启Caddy容器或者重启服务器，Caddy就会重新申请，但是不保证100%申请成功。\n如果一直申请失败，可以等第二天重试或者在搭建之前提前准备好证书并上传至服务器，在安装的时候选择手动设置证书路径选项指定证书的绝对路径。")]),t._v(" "),a("h2",{attrs:{id:"限速功能和ip数限制支持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#限速功能和ip数限制支持"}},[t._v("#")]),t._v(" 限速功能和IP数限制支持")]),t._v(" "),a("p",[t._v("代理软件支持后Trojan Panel才能支持，目前只有Trojan-Go支持，但是还存在一些"),a("a",{attrs:{href:"https://github.com/p4gefau1t/trojan-go/issues/216",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bug"),a("OutboundLink")],1),t._v("，Xray/Hysteria/NaiveProxy还没有支持。")]),t._v(" "),a("h2",{attrs:{id:"联机版和单机版区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#联机版和单机版区别"}},[t._v("#")]),t._v(" 联机版和单机版区别")]),t._v(" "),a("p",[t._v("联机版：可以使用面板管理多个服务器上的节点，支持多用户，支持流量控制，功能强大，适合多人使用。")]),t._v(" "),a("p",[t._v("单机版：只有一个用户，功能简单，适合自用。")]),t._v(" "),a("h2",{attrs:{id:"商业化功能支持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#商业化功能支持"}},[t._v("#")]),t._v(" 商业化功能支持")]),t._v(" "),a("p",[t._v("暂时不考虑。")]),t._v(" "),a("h2",{attrs:{id:"会收费么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#会收费么"}},[t._v("#")]),t._v(" 会收费么")]),t._v(" "),a("p",[t._v("不会收费，"),a("a",{attrs:{href:"https://github.com/trojanpanel",target:"_blank",rel:"noopener noreferrer"}},[t._v("点个Star"),a("OutboundLink")],1),t._v("支持一下就行了。")]),t._v(" "),a("h2",{attrs:{id:"开源计划"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开源计划"}},[t._v("#")]),t._v(" 开源计划")]),t._v(" "),a("p",[t._v("暂无开源计划，哪天不想维护了，可能就开源了。")])])}),[],!1,null,null,null);a.default=s.exports}}]);