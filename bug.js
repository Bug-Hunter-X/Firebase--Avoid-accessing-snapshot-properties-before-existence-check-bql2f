The Firebase SDK may throw an error if you try to access a property of a document snapshot before the `snapshot.exists` property is checked. This is because the snapshot might be null, and accessing properties of a null object will result in an error.