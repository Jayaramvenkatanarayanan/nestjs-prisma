"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsServices = void 0;
const common_1 = require("@nestjs/common");
const products_modle_1 = require("./products.modle");
let ProductsServices = class ProductsServices {
    constructor() {
        this.products = [];
    }
    async insertProduct(title, description, price) {
        const id = '2222';
        const newProduct = new products_modle_1.Product(id, title, description, price);
        this.products.push(newProduct);
        return this.products;
    }
};
ProductsServices = __decorate([
    common_1.Injectable()
], ProductsServices);
exports.ProductsServices = ProductsServices;
//# sourceMappingURL=products.service.js.map