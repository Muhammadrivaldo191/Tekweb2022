# API POINTS


## ARTICLE

### Menampilkan seluruh article

```
GET: /show

response:
[
  {
    "id"        : "",
    "article"     : "",
    "author"    : "",
    "content"   : "",
    "markdown"  : ""
  },
  {
    ...
  }
]
```

### Menampilkan article berdasarkan ```id```

```
GET: /article/[id]

response:
{
  "id"        : "",
  "artticle"  : "",
  "author"    : "",
  "content"   : "",
  "markdown"  : ""
}
```

### Menambahkan article

```
POST: /article

data:
{
  "artticle"  : "",
  "author"    : "",
  "content"   : "",
  "markdown"  : ""
}

response:
true    //if true
false   //if false
```

### Mengubah article

```
PUT: /article

data:
{
  "artticle"  : "",
  "author"    : "",
  "content"   : "",
  "markdown"  : ""
}

response:
true    //if true
false   //if false
```

### Menghapus article

```
DELETE: /article

response:
true    //if true
false   //if false
```



# DATABASE DESIGN

![Design Database](https://raw.githubusercontent.com/Daffanuradii/tekweb2022/main/p2.png)
