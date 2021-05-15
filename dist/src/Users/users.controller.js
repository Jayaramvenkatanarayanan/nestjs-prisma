"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
let ProductsController = class ProductsController {
    constructor(usersServices) {
        this.usersServices = usersServices;
    }
    async getUserList(response) {
        const results = await this.usersServices.getAllUser();
        response.status(common_1.HttpStatus.OK).send({ data: results, status: true });
        response.end();
    }
    async getUserByID(id, response) {
        const results = await this.usersServices.getUserByID(id);
        if (results !== null) {
            response.status(common_1.HttpStatus.OK).send({ data: results, status: true });
            response.end();
        }
        else {
            response.status(common_1.HttpStatus.NOT_FOUND).send({ data: [], status: false });
            response.end();
        }
    }
    async createNewUser(response, userData) {
        var _a;
        const postData = (_a = userData.posts) === null || _a === void 0 ? void 0 : _a.map((post) => {
            return { title: "name1", content: "data2" };
        });
        var input = {
            data: {
                name: userData.name,
                email: userData.email,
                posts: {
                    create: postData,
                },
            },
        };
        const addedNewUser = await this.usersServices.createUser(input);
        if (addedNewUser) {
            response
                .status(common_1.HttpStatus.OK)
                .send({ data: "usercreated.", status: true });
            response.end();
        }
        else {
            response
                .status(common_1.HttpStatus.INTERNAL_SERVER_ERROR)
                .send({ data: "usercreate Failed.", status: false });
            response.end();
        }
    }
    async togglePublishPost(id, response) {
        const userPublised = await this.usersServices.userPublish(id);
        if (userPublised) {
            response
                .status(common_1.HttpStatus.OK)
                .send({ data: "userPublished.", status: true });
            response.end();
        }
        else {
            response
                .status(common_1.HttpStatus.INTERNAL_SERVER_ERROR)
                .send({ data: "userPublish Failed.", status: false });
            response.end();
        }
    }
    async deletePost(id, response) {
        const userPostDeleted = await this.usersServices.deletePost(id);
        if (userPostDeleted) {
            response
                .status(common_1.HttpStatus.OK)
                .send({ data: "userpostDeleted.", status: true });
            response.end();
        }
        else {
            response
                .status(common_1.HttpStatus.INTERNAL_SERVER_ERROR)
                .send({ data: "userpostDeleted Failed.", status: false });
            response.end();
        }
    }
};
__decorate([
    common_1.Get("users"),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getUserList", null);
__decorate([
    common_1.Get("user/:id"),
    __param(0, common_1.Param("id")),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getUserByID", null);
__decorate([
    common_1.Post("addNewUser"),
    __param(0, common_1.Res()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "createNewUser", null);
__decorate([
    common_1.Patch("userPublish/:id"),
    __param(0, common_1.Param("id")),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "togglePublishPost", null);
__decorate([
    common_1.Delete("deletePost/:id"),
    __param(0, common_1.Param("id")),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "deletePost", null);
ProductsController = __decorate([
    common_1.Controller("userController"),
    __metadata("design:paramtypes", [users_service_1.UsersServices])
], ProductsController);
exports.ProductsController = ProductsController;
//# sourceMappingURL=users.controller.js.map