const TABLE = 'post';

module.exports = (sequileze, type) => {
  return sequileze.define(TABLE, {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: type.STRING,
    content: type.STRING,
    image: type.STRING,
    category: type.STRING,
    });
}