```javascript
// Solution: Use specific and more explicit class names for better control.
<div class="bg-gradient-to-r from-blue-500 via-blue-600 to-purple-500 p-4 rounded-lg shadow-lg">
  <p>This is some text.</p>
</div>
// or, if the previous solution doesn't work, try separating gradient and other styles into separate divs:
<div class="p-4 rounded-lg shadow-lg">
  <div class="bg-gradient-to-r from-blue-500 to-purple-500">
    <p>This is some text.</p>
  </div>
</div>
```