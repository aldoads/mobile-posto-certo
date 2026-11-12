import { APP_MAX_WIDTH, PADDING_HORIZONTAL } from '../theme/layout';
import { StyleSheet, Platform } from 'react-native';
import { colors } from '../theme/colors';

export const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Platform.OS === 'web' ? colors.fundoWeb : colors.branco,
  },
  app: {
    flex: 1,
    width: '100%',
    maxWidth: APP_MAX_WIDTH,
    backgroundColor: colors.branco,
  },
  scroll: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    paddingBottom: 12,
  },
  sections: {
    paddingHorizontal: PADDING_HORIZONTAL,
  },
});
