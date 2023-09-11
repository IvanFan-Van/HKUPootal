# HKUPootal Written Examination

This is a repository for 2023 HKUPootal Written Examination. 



**Examination Content**:

# 第一题

**1分，适合所有同学。**

给定一棵二叉树的前序遍历和中序遍历，就可以确定这棵二叉树。请你编写代码，实现**输入二叉树的前序和中序遍历，输出该二叉树的****后序遍历**，并上传至 GitHub **。**

- 输入：第一行为一个由大写英文字母组成的字符串，表示二叉树的前序遍历；第二行为一个由大写英文字母组成的字符串，表示二叉树的中序遍历。（因此你可以假设所有数据中二叉树的节点数量不超过26）
- 输出：一个由大写英文字母组成的字符串，表示该二叉树的后序遍历。

**语言：**任意

**提交内容**：GitHub Repo 链接



# 第二题

**2分，适合有志于参与后端开发的同学。**

假设有以下两张表，请写出一个SQL语句，**查询每个部门工资最高的员工及其工资信息，并按部门名称升序排序**。

- Employee（员工表）

| 字段名     | 数据类型    |
| ---------- | ----------- |
| emp_id     | INTEGER     |
| emp_name   | VARCHAR(20) |
| emp_salary | INTEGER     |
| dept_id    | INTEGER     |

- Department（部门表）

| 字段名    | 数据类型    |
| --------- | ----------- |
| dept_id   | INTEGER     |
| dept_name | VARCHAR(20) |

**语言：**SQL

**提交内容**：SQL语句



# 第三题

**2分，适合有志于参与前端开发的同学。**

请使用 Web 开发一个简单的 **邮箱输入框+提交按钮** ，实现以下功能并上传至 GitHub ：

- 输入框实时监测邮箱是否符合HKU邮箱格式（ @connect.hku.hk 或 @hku.hk ）
  - 不符合格式时： 输入框显示红色边框，并且提交按钮显示为灰色且无法点击
  - 符合格式时：  输入框显示绿色边框，并且提交按钮可点击
- 点击提交按钮后， 提取邮箱中的 UID 并显示在按钮下方（如用户输入 helloworld@hku.hk ，显示“helloworld”）
- Optional：部署到互联网上并提供访问链接
- Optional：网页背景色适配深色模式（根据系统设置自动切换）

**可以使用任何前端框架， 不能使用组件库。**

**语言：**HTML，CSS，JavaScript / TypeScript

**提交内容：**GitHub Repo 链接， 部署网址（如有，最好是 GitHub Pages）



# 第四题

**3分，适合有志于参与后端开发的同学。**

Triple Uni的搜索功能基于 **ElasticSearch** 搜索引擎。请你**阅读  ElasticSearch 官方文档**（[英文版](https://www.elastic.co/guide/en/elasticsearch/reference/8.2/index.html)或版本较低但大部分仍适用的[中文版](https://www.elastic.co/guide/cn/elasticsearch/guide/current/index.html)），完成以下任务。

假设创建 post 索引时的请求如下：

```Plain
PUT /post
{
    "settings": {
        "number_of_shards": 1,
        "number_of_replicas": 1
    },
    "mappings": {
        "properties": {
            "post_id": {   //树洞的唯一ID
                "type": "long"
            },
            "post_msg": {   // 树洞正文
                "type": "text",
                "analyzer": "ik_smart"   // 使用IK分词器 https://github.com/medcl/elasticsearch-analysis-ik （与本题无关）
            },
            "post_create_time": {   // 树洞发布时间的时间戳（秒）
                "type": "long"
            }
        }
    }
}
```

请你编写搜索请求，使返回的文档满足：

- post_msg 字段包含关键词“HKUPootal”，可假设分词器词库中包含该词
- 按发布时间（即 post_create_time ）倒序排序

**语言：**HTTP请求（参考创建索引的请求）

**提交内容**：请求原文



# 第五题

**3分，适合有志于参与前端开发的同学。**

请使用 Web 开发一个简单的 **新闻汇总软件的首页** ，实现以下功能并上传至 GitHub ：

- 使用 https://mediastack.com/ 提供的免费API实时获取最新的新闻数据
- 以列表的形式展示获取到的内容
  - UI可自由设计
  - 点击列表内容时可跳转到对应的网页
- 部署到互联网上并提供访问链接
- Optional：通过调整/添加API的请求参数，给你的软件添加任何额外功能都为加分项 
- Optional：采用响应式布局，适配移动端+PC端

**可以使用任何前端框架和组件库。**

**语言：**HTML，CSS，JavaScript / TypeScript

**提交内容**：GitHub Repo 链接， 部署网址（最好是 GitHub Pages）



## 补充信息

希望HKUPootal的笔试官看过来. 我发现第五题你们给出的那个proxy无法正确的发送mediastack的请求. 有时还会出现server error. 所以我并没有使用你们的代理服务器. 但是! 为了能够发送请求到mediastack那边, 我选择在本地开启vpn来访问. 所以, 第五题的成果部署在互联网上的是无法访问mediastack的, 我希望能够在面试的时候, 当面给你们展示效果. 为了补偿无法在线访问我第五题的成果, 我将一些网站的截图放置在了question5里, 可以查看作为一个粗略评价
