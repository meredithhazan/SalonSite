module.exports = function (sequelize, DataTypes) {
    var Staff = sequelize.define("Staff", {
        name: {
            type: DataTypes.STRING,
            // // allowNull: false
        },
        lastname: {
            type: DataTypes.STRING,
            // // allowNull: false
        }, 
        bio: {
            type: DataTypes.TEXT,
            // allowNull: true
        },
        station: {
            type: DataTypes.STRING,
            // allowNull: true
        },
        day: {
            type: DataTypes.STRING,
            // allowNull: false
        },
        hour: {
            type: DataTypes.STRING,
            // allowNull: false
        },
        emergency_contact_name: {
            type: DataTypes.STRING,
            // allowNull: false
        },
        emergency_contact_phone: {
            type: DataTypes.STRING,
            // allowNull: false
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    Staff.associate = (models) => {
        Staff.belongsToMany(models.Service, {
            through:models.Staff_service
        });
        Staff.belongsTo(models.Email, {
            foreignKey: {
                allowNull: false
            }
        });
        Staff.belongsTo(models.Phone, {
            foreignKey: {
                allowNull: false
            }
        });
        Staff.belongsTo(models.Address, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Staff;
}