var posts=["2024/08/31/hello-world/","2024/09/02/前端开发/","2024/09/25/云服务/","2024/09/02/后端开发/","2024/09/25/常用工具/","2019/09/25/微服务/","2009/09/02/数据库设计/","2024/09/06/用springBoot来实现一个restfulAPI接口调用/","2024/09/25/算法学习/","2011/09/02/接口设计/","2010/09/02/系统设计/","2024/09/25/微服务2/","2024/09/25/框架学习/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };