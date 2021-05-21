const TABLE = 'category';

module.exports = (sequileze, type) => {
  return sequileze.define(TABLE, {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    category: type.STRING,
  },
  {
    timestamps: false,
  }
  );
}