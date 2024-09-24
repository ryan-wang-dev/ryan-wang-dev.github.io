var posts=["2024/09/07/Java简介/","2024/08/31/hello-world/","2011/09/02/如何做API设计/","2009/09/02/如何进行数据库设计/","2010/09/02/如何进行系统设计/","2024/09/02/游戏人生/","2024/09/02/生活日常/","2024/09/06/用springBoot来实现一个restfulAPI接口调用/","2024/09/02/快速了解前端开发/","2024/09/02/快速了解后端开发/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };