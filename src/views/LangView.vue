<template>
  <div class="langs">
    
    <div class="rows">
      <router-link to="/java" class="links">
        <img src="https://code-basics.com/assets/java-531f8eb067e0ec4d64dd50479a4484ea84c9a63d366f389683a05e092ce150f0.png" alt="" class="imgs">
        <h4>Java</h4>
      </router-link>
      <router-link to="/javas" class="links">
        <img src="https://code-basics.com/assets/javascript-dabd5a41055d046ac8c674908debbcb13ec29be8f406b16aa06a325c5f525f8a.png" alt="" class="imgs">
        <h4>JavaScript</h4>
      </router-link>
      <router-link to="/python" class="links">
        <img src="https://code-basics.com/assets/python-987d2b3bad0c263ccc412634cddcc8b74dd7f456d64a4c20ffdb58b870ba4d6f.png" alt="" class="imgs">
        <h4>Python</h4>
      </router-link>
      <router-link to="/html" class="links">
        <img src="https://code-basics.com/assets/html-d665b1de9bcce7a443722b84f4aeea9bfcbe05c2141a672547d683fcbd853918.png" alt="" class="imgs">
        <h4>HTML</h4>
      </router-link>
    </div>
    <div class="rows">
      <router-link to="/css" class="links">
        <img src="https://code-basics.com/assets/css-39a286152ebc19245e8a5bbe117054c90389d346d8a75718cdc507f57bff6f5b.png" alt="" class="imgs">
        <h4>CSS</h4>
      </router-link>
      <router-link to="/php" class="links">
        <img src="https://code-basics.com/assets/php-58851f7f818517f6b6cab75366d1628476fbead06e619549cefea8cd64995bbd.png" alt="" class="imgs">
        <h4>PHP</h4>
      </router-link>
      <router-link to="/c_sharp" class="links">
        <img src="https://code-basics.com/assets/csharp-6aa827ca563aea3973199e2d8d43e8e9b7c3f65661dd7108e3590cf6fb16d64c.png" alt="" class="imgs">
        <h4>C#</h4>
      </router-link>
      <router-link to="/c" class="links">
        <img src="https://code-basics.com/assets/clang-43da11bb7434719a7f1d91e01028c5cc0cb25c5563b31af7a63169b8bb377b00.png" alt="" class="imgs">
        <h4>C</h4>
      </router-link>
    </div>

  </div>
</template>
<style>


.langs{
  width: 100%;
  height: 630px;
 
 
  
}
.rows{
  height: 50%;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-around;
 
  margin: auto;
  padding: 10px;
}
.links{
  height: 100%;
  width: 250px;
  border-radius: 20px;
  box-shadow: 10px 10px 25px gray;
  
}
.imgs{
  width: 100%;
  height: 250px;
  border-radius: 20px 20px 0 0;
}
 
</style>
