<component>
  <p>{ message }</p>
  <script>

    import moment from 'moment'

    this.message = 'hi'
    this.action = () => {
      var foo = 'foo'
      return {foo}
    }
    this.async = function *() {
      var result = yield request()
    }
  </script>
</component>