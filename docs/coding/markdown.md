# markdown

## MD001 - heading-increment

- 标题级别应该依次递增，不要跳级（如从 `#` 跳到 `###`）。

```markdown
<!-- bad -->

# 一级标题

### 错误的三级标题（跳过了二级）

<!-- good -->

# 一级标题

## 二级标题

### 三级标题
```

## MD003 - heading-style

- 标题样式应一致（ATX `#` 风格或 Setext `=`/`-` 风格）。

```markdown
<!-- bad -->

标题 1
========

标题 2
--------

<!-- good -->

# 标题 1

## 标题 2
```

## MD004 - ul-style

- 无序列表符号应一致（如 `-`、`*`、`+`）。

```markdown
<!-- bad -->

- 项目 1
* 项目 2
- 项目 3

<!-- good -->

- 项目 1
- 项目 2
- 项目 3
```

## MD005 - list-indent

- 列表项缩进不一致。

```markdown
<!-- bad -->

* 项目一
  * 子项目一
   * 子项目二

<!-- good -->

* 项目一
  * 子项目一
  * 子项目二
```

## MD007 - ul-indent

- 无序列表缩进应一致（如 2 或 4 个空格）。

```markdown
<!-- bad -->
* 列表项
   * 子列表项，缩进为 3 个空格

<!-- good -->
* 列表项
  * 子列表项，缩进为 2 个空格
```

## MD009 - no-trailing-spaces

- 行尾不应有多余空格。

```markdown
<!-- bad -->
- 列表项文字
  ␣␣
  - 列表项继续

<!-- good -->
- 列表项文字

  - 列表项继续
```

## MD010 - no-hard-tabs

- 不应使用制表符（Tab），使用空格代替。

## MD011 - no-reversed-links

- 链接语法错误，形如 `[link](text)` 应改为 `[text](link)`。

```markdown
<!-- bad -->
(错误的链接语法)[https://www.example.com/]

<!-- good -->
[正确的链接语法](https://www.example.com/)
```

## MD012 - no-multiple-blanks

- 不应有多个连续空行。

```markdown
<!-- bad -->
第一段文本


第二段文本

<!-- good -->
第一段文本

第二段文本
```

## MD013 - line-length

- 行长度不应超过特定限制（默认是 80 字符）。

## MD014 - commands-show-output

- 命令行代码块中不应加 `$` 符号（如 `$ npm install`）除非是交互式展示。

```markdown
<!-- bad -->
$ npm install

<!-- good -->
npm install
```

## MD018 - no-missing-space-atx

- ATX 风格标题 `#` 后应加空格。

```markdown
<!-- bad -->
#一级标题
##二级标题

<!-- good -->
# 一级标题
## 二级标题
```

## MD019 - no-multiple-space-atx

- 标题符号 `#` 后不应有多个空格。

```markdown
<!-- bad -->
#  一级标题
##  二级标题

<!-- good -->
# 一级标题
## 二级标题
```

## MD020

- ATX 标题尾部不应含有空格

```markdown
<!-- bad -->


<!-- good -->

```

## MD021

- ATX 尾部 `#` 与内容之间不应有多个空格

```markdown
<!-- bad -->


<!-- good -->

```

## MD022

- 标题前后应有空行

```markdown
<!-- bad -->


<!-- good -->

```

## MD024

- 不应有多个相同内容的标题（避免混淆）

```markdown
<!-- bad -->


<!-- good -->

```

## MD025

- 一个文档中应只有一个一级标题

```markdown
<!-- bad -->


<!-- good -->

```

## MD026

- 标题不应以标点符号结尾（如 `？`、`。`）

```markdown
<!-- bad -->


<!-- good -->

```

## MD027

- 引用 `>` 后不应有多个空格

```markdown
<!-- bad -->


<!-- good -->

```

## MD028

- 有序列表编号格式应统一（如始终使用 `1.`）

```markdown
<!-- bad -->


<!-- good -->

```

## MD030

- 列表符号后应加一个空格

```markdown
<!-- bad -->


<!-- good -->

```

## MD031

- 代码块前后应有空行

```markdown
<!-- bad -->


<!-- good -->

```

## MD032

- 列表前后应有空行

```markdown
<!-- bad -->


<!-- good -->

```

## MD033

- 不应在 Markdown 中使用原始 HTML（除非必要）

```markdown
<!-- bad -->


<!-- good -->

```

## MD034

- 不应直接放裸网址，建议用 `[描述](url)` 格式

```markdown
<!-- bad -->


<!-- good -->

```

## MD035

- 水平线 `---`、`***` 或 `___` 风格应一致

```markdown
<!-- bad -->


<!-- good -->

```

## MD036

- 不要用强调（如 `**加粗**`）代替标题

```markdown
<!-- bad -->


<!-- good -->

```

## MD037

- 强调语法内外不应加空格（如 `** 粗体 **` 是错误的）

```markdown
<!-- bad -->


<!-- good -->

```

## MD038

- 行内代码块 \`\`\` 内不应有空格

```markdown
<!-- bad -->


<!-- good -->

```

## MD039

- 链接文字内不应有空格（如 `[ xxx ](url)` 是错误的）

```markdown
<!-- bad -->


<!-- good -->

```

## MD040

- 代码块应指定语言类型（如 \`\`\`js）

```markdown
<!-- bad -->


<!-- good -->

```

## MD041

- 文件第一行应为一级标题

```markdown
<!-- bad -->


<!-- good -->

```

## MD042

- 链接地址不能为空（如 `[text]()`）

```markdown
<!-- bad -->


<!-- good -->

```

## MD043

- 缺少特定标题（适用于自定义模板要求）

```markdown
<!-- bad -->


<!-- good -->

```

## MD044

- 品牌/专有名词拼写应正确（如 JavaScript、Node.js）

```markdown
<!-- bad -->


<!-- good -->

```

## MD045

- 图片必须包含替代文本（alt）

```markdown
<!-- bad -->


<!-- good -->

```

## MD046

- 代码块风格应一致（如统一使用 \`\`\` 形式）

```markdown
<!-- bad -->


<!-- good -->

```

## MD047

- 文件应以一个换行符结尾

```markdown
<!-- bad -->


<!-- good -->

```

## MD048

- 代码块符号样式应一致（使用 \`\`\` 而非 \~\~\~）

```markdown
<!-- bad -->


<!-- good -->

```
