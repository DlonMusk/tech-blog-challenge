// import statements
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create the model
class Comment extends Model{};

// initialize the model
Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'post',
                key: 'id'
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        } 
    },
    {
        sequelize,
        freezeTableName: false,
        timestamps: false,
        underscored: true,
        modelName: 'comment'
    }
)

// export the model
module.exports = Comment;