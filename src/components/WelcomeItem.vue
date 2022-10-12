<template>
 <div></div>
</template>
<script>
 import { useStorage } from "@vueuse/core"

 // bind object
 const state = useStorage("my-store", { hello: "hi", greeting: "Hello" })

 // bind boolean
 const flag = useStorage("my-flag", true) // returns Ref<boolean>

 // bind number
 const count = useStorage("my-count", 0) // returns Ref<number>

 // bind string with SessionStorage
 const id = useStorage("my-id", "some-string-id", sessionStorage) // returns Ref<string>

 // delete data from storage
 state.value = null
 import { useDark, useToggle } from "@vueuse/core"

 const isDark = useDark()
 const toggleDark = useToggle(isDark)
</script>
