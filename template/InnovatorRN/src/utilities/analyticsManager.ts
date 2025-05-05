import {Mixpanel, MixpanelProperties} from 'mixpanel-react-native';
import config from '../constants/config';

class AnalyticsManager {
  static managerInstance: Mixpanel;
  static async init(userId: string) {
    try {
      if (!this.managerInstance) {
        this.managerInstance = new Mixpanel(config.MIXPANEL_KEY, true);
        await this.managerInstance.init();
      }
      await this.managerInstance.identify(userId);
    } catch (error) {
      console.error('Error initializing Mixpanel:', error);
    }
  }

  static reset() {
    this.managerInstance?.reset();
  }

  static flush() {
    this.managerInstance?.flush();
  }

  static track(event: string, properties?: MixpanelProperties) {
    this.managerInstance?.track(event, properties);
  }
}

export default AnalyticsManager;
