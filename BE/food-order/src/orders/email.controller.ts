import { Controller, Get, Post, Query, Body } from '@nestjs/common/decorators';
import { MailerService } from '@nestjs-modules/mailer';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('email')
export class EmailController {
  constructor(private mailService: MailerService) {}

  getDate() {
    let date = new Date();

    let month = '';
    if (date.getMonth() + 1 < 10) {
      month = `0${date.getMonth() + 1}`;
    } else {
      month = date.getMonth().toString();
    }
    let day = '';
    if (date.getDate() < 10) {
      day = `0${date.getDate()}`;
    } else {
      day = date.getDate().toString();
    }
    let hour = '';
    if (date.getHours() < 10) {
      hour = `0${date.getHours()}`;
    } else {
      hour = date.getHours().toString();
    }
    let min = '';
    if (date.getMinutes() < 10) {
      min = `0${date.getMinutes()}`;
    } else {
      min = date.getMinutes().toString();
    }
    let year = date.getFullYear();

    let formattedDate = `${year}.${month}.${day}-${hour}:${min}`;
    return formattedDate;
  }
  @Get('test')
  async getTestMail(@Query('toemail') toemail) {
    await this.mailService.sendMail({
      to: toemail,
      from: 'foodorderapp.2024@gmail.com',
      subject: 'First email',
      text: 'First email text',
    });
    return 'success';
  }

  @Post('/order-ready')
  async createFinalOrderMessage(@Body() createOrderDto: CreateOrderDto) {
    const createFinalMessage = (name) => {
      let text = `<h2>Dear ${name}</h2> \n
      <p>Thank you for your patience, your food is ready for delivery.</p> \n
      <p>Based on your given address, your food should be there in 30 minutes.</p> \n
      <h3>Enjoy your meal!</h3>`;
      return text;
    };
    await this.mailService.sendMail({
      to: createOrderDto.email,
      from: 'foodorderapp.2024@gmail.com',
      subject: `${this.getDate()} FoodOrderApp`,
      html: `${createFinalMessage(createOrderDto.name)}`,
    });
  }

  @Post('/order-create')
  async createOrderMessage(@Body() createOrderDto: CreateOrderDto) {
    const createFirstMessage = (name) => {
      let text = `<h2>Dear ${name}</h2> \n
      <p>our chefs have started preparing your food.</p> \n
      <p>We will notify you as soon as your food is ready </p>
      `;
      return text;
    };
    await this.mailService.sendMail({
      to: createOrderDto.email,
      from: 'foodorderapp.2024@gmail.com',
      subject: `${this.getDate()} FoodOrderApp`,
      html: `${createFirstMessage(createOrderDto.name)}`,
    });
  }

  @Post('/order-processed')
  async createOrderProcessedMessage(@Body() createOrderDto: CreateOrderDto) {
    const createFoodList = (name, foodList, address, totalPrice) => {
      let msg = `<h2>Your order list:</h2>`;
      msg += `<ul>`;
      foodList.map((food) => {
        msg += `<h4>Name: ${food.name} ---- Price: ${food.price} $ / pc ---- Quantity: ${food.cartQuantity}</h4>`;
      });
      msg += `</ul>`;
      let emailText = `<h2>Dear ${name}</h2> \n
      <p>Your order has been processed.</p> \n
      <p>your delivery address: ${address}</p> \n
      ${msg} \n
      <p>The final price: ${totalPrice}</p> \n
      <p>If you find any error in the datas above please contact us.</p> \n
      <p>We will let you know when our chefs have started preparing your food, it may take a few minutes.</p>`;

      return emailText;
    };

    await this.mailService.sendMail({
      to: createOrderDto.email,
      from: 'foodorderapp.2024@gmail.com',
      subject: `${this.getDate()} FoodOrderApp`,
      html: `${createFoodList(
        createOrderDto.name,
        createOrderDto.itemList,
        createOrderDto.address,
        createOrderDto.totalPrice,
      )}`,
    });
  }
}
