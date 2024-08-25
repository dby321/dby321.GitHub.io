var bookmarkToJson = {
    methods: {
        /**
         * 点击确认按钮
         */
        submit() {
            // 获取文件对象
            var file = document.getElementById("file").files[0];
            if (file.name.indexOf(".html") < 0) {
                // 不处理非html的文件类型
                this.alertErr()
                return
            }
            // 获取文件里面的文本信息
            file.text().then(res => {
                // 内容转成dom对象
                let doms = this.parseToDOM(res);
                for (const dom of doms) {
                    // 从dom对象中获取DL标签
                    if (dom.tagName == 'DL') {
                        let result = this.textHandle(dom, null);
                        // this.exportRaw('data.json', JSON.stringify(result.children))// 导出为文件
                        // this.menuList=result.children;
                        localStorage.setItem("menuList",JSON.stringify(result.children))
                        this.$message({
                                showClose: true,
                                message: "添加你的书签成功，请在左边菜单栏中的 你的书签 中查看",
                                type: 'success'
                        });
                    }
                }
            })
        },

        /**
         * 导出为文件
         */
        exportRaw(name, data) {
            var urlObject = window.URL || window.webkitURL || window;
            var export_blob = new Blob([data]);
            var save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
            save_link.href = urlObject.createObjectURL(export_blob);
            save_link.download = name;
            var ev = document.createEvent("MouseEvents");
            ev.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            save_link.dispatchEvent(ev);
        },


        /**
         * 弹错误信息弹窗
         */
        alertErr() {
            alert("请不要上传非谷歌浏览器书签文件")
        },


        /**
         *
         * @param dl
         * @param temp
         * @returns {*}
         */
        textHandle(dl, temp) {
            // 先获取DL 下面的DT
            let dts = this.getDts(dl);
            if (dts.length > 0) {
                // 判断DT下面是否有DL标签
                for (var i in dts) {
                    let dt = dts[i], hdl = this.getTag(dt, "DL");
                    if (hdl != null) {
                        let h = this.getTag(dt, "H3");
                        let returns = this.textHandle(hdl, {name: h.textContent, children: []})
                        if (temp == null) {
                            temp = returns;
                        } else {
                            temp.children.push(returns);
                        }
                    } else {
                        var a = this.getTag(dt, "A");
                        // temp.web.push
                        temp.children.push({
                            url: a.href,
                            title: a.textContent,
                            name: a.textContent,
                            logo: a.getAttribute("ICON")
                        })
                    }
                }
            }
            return temp;
        },


        /**
         * 获取dt下面的标签
         *
         * @param dl
         * @return
         */
        getTag(dt, tagname) {
            let dtcs = dt.children, obj = null;
            if (dtcs.length < 1) {
                return obj
            }
            for (let dtc of dtcs) {
                if ((dtc.tagName.toUpperCase()) == tagname) {
                    obj = dtc;
                    break;
                }
            }
            return obj;
        },


        /**
         * 获取DL下面的DT标签
         * @param dl
         * @returns {[]}
         */
        getDts(dl) {
            let dlcs = dl.children, arr = [];
            if (dlcs.length < 1) {
                return arr;
            }
            for (let dlc of dlcs) {
                if ((dlc.tagName.toUpperCase()) == 'DT') {
                    arr.push(dlc)
                }
            }
            return arr;
        },

        /**
         * 把String转为DOM对象
         * @param str
         * @returns {NodeListOf<ChildNode>}
         */
        parseToDOM(str) {
            let div = document.createElement("div");
            if (typeof str == "string") {
                div.innerHTML = str;
            }
            return div.childNodes;
        }

    }
}
export default bookmarkToJson;