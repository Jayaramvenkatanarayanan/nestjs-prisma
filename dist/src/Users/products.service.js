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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsServices = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let ProductsServices = class ProductsServices {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllUser() {
        return this.prisma.user.findMany({
            include: {
                posts: {},
            },
        });
    }
    async getUserByID(id) {
        return this.prisma.user.findUnique({ where: { id: Number(id) } });
    }
    async createUser(userInput) {
        return this.prisma.user.create(userInput);
    }
};
ProductsServices = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductsServices);
exports.ProductsServices = ProductsServices;
//# sourceMappingURL=products.service.js.map