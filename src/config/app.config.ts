interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Car Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member', 'Car Owner'],
  tenantName: 'Organization',
  applicationName: 'Car Sharing Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage bookings', 'Submit reviews', 'Report issues', 'Update personal information'],
  ownerAbilities: [
    'Manage your car information',
    'Create and manage bookings for your car',
    'View and respond to reports about your car',
    'Rate and review users who booked your car',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/53d40747-3769-478a-a38f-0c2642ee2836',
};
