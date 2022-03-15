import { PrismaClient } from '@prisma/client';

interface IClient {
  company_name: string;
  client_name: string;
  celphone: string;
  email: string;
  tax: number;
  plan_id: string;
  segment_id: string;
  service_id: string;
  users_id: string[];
}

export class CreateClientService {
  async execute({
    company_name, client_name, celphone,
    email, tax, plan_id, segment_id,service_id, users_id
  }: IClient) {

    const prismaClient = new PrismaClient();

    /**
     * VERIFY IF CLIENT EXISTS
     * IF EXIST
     * RETURN A ERROR
     * ELSE
     * CREATE IN THE DATABASE
     */

    /**
     * VERIFY IF CLIENT EXISTS
     */

    const client_exists = await prismaClient.client.findFirst({
      where: {
        company_name
      }
    })

    /**
     * RETURN A ERROR
     */

    if (client_exists) {
      throw new Error("This client exists!");
    }

    /**
     * CREATE THIS CLIENT IN THE DATABASE
     */


    const client = await prismaClient.client.create({
      data: {
        company_name,
        client_name,
        email,
        celphone,
        tax,
        segment: {
          connect: {
            id: segment_id
          }
        },
        plan: {
          connect: {
            id: plan_id
          }
        },
        service: {
          connect: {
            id: service_id
          }
        }
      }   
    });

    const client_id = client.id

    users_id.map(async (id) => {
      await prismaClient.clientUser.create({
        data: {
          user: {
            connect: {
              id
            }
          },
          client: {
            connect: {
              id: client_id
            }
          }
        }
      })
    })

    /*
    var sellers_quantity = 0;
    var googleads_quantity = 0;
    var facebook_quantity = 0;

    users_id.map(async (id)  => {
      const user = await prismaClient.user.findFirst({where: { id }, select: {
        sector: {
          select: {name: true}
        }
      }});
      const user_sector = user?.sector.name
      console.log(user_sector)

      if(user_sector == "Google Ads" && googleads_quantity == 0){
        googleads_quantity += 1;
      } else if (user_sector == "Vendas" && sellers_quantity == 0) {
        sellers_quantity += 1;
      } else if (user_sector =="Facebook Ads" && facebook_quantity ==0) {
        facebook_quantity +=1 
      } else {
        throw new Error("Two users of the same sector")
      }

      await create_client_user(id, client_id)

      async function create_client_user(user_id: string, client_id: string) {

        await prismaClient.clientUser.create({
          data:{
            client: {
              connect: {
                id: client_id
              }
            },
            user: {
              connect: {
                id: user_id
              }
            }
          }
        })

      }

    })*/

    return client
  }
}