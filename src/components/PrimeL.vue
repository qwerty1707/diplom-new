<template>
    <div class="demo">
        <div class="code-playground">
            <div class="editor-container">
              
                <code-editor v-model="htmlCode"></code-editor>
            </div>
            <div class="result-container">
                <result-view :htmlContent="htmlCode"></result-view>
            </div>
        </div>
    </div>
</template>
<script>
// import CodeEditor from './'
// import ResultView from './'

export default {
  name: 'CodePlayground',
  components: {
    // CodeEditor,
    // ResultView
  },
  data() {
    return {
      htmlCode: '<h1>Hello, World!</h1>'
    }
  }
}
</script>

<style>
.code-playground {
  display: flex;
  height: 100vh;
}

.editor-container,
.result-container {
  flex: 1;
  padding: 20px;
}
</style>


