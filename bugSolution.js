To fix this, always check the `snapshot.exists` property before accessing any other properties of the snapshot:

```javascript
db.collection('myCollection').doc('myDoc').get().then(snapshot => {
  if (snapshot.exists) {
    const data = snapshot.data();
    console.log('Data:', data.myProperty); // Access properties safely
  } else {
    console.log('Document does not exist');
  }
}).catch(error => {
  console.error('Error getting document:', error);
});
```
This ensures that you only attempt to access properties of the snapshot if the document actually exists.