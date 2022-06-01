// import node modules
import { StyleSheet } from 'react-native';

// Import interfaces
import colors from '@styles/Themes/variables/color';
import size from '@styles/Themes/variables/size';
import { color } from 'react-native-reanimated';

export const avis = StyleSheet.create({
    avisMainContainer: {
        backgroundColor: colors.primary,
        flex: 1,
        paddingHorizontal: 15,
    },

    subTitle: {
        color: colors.initial,
        fontSize: 18,
        marginTop: -10,
        marginBottom: 20
    },

    avisCard: {
        backgroundColor: colors.initial,
        marginBottom: 15,
        paddingVertical: 13,
        paddingHorizontal: 18,
        borderRadius: 20,
    },

    lieu: {
        textTransform: 'uppercase',
        fontSize: 20,
        color: colors.black,
    },

    nomPropriete: {
        fontSize: 18,
        lineHeight: 20,
        color: colors.black,
    },

    date: {
        color: colors.grey,
        fontSize: 14,
        marginTop: 7,
    },

    noteContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 7,
    },

    noteIcon: {
        resizeMode: 'contain',
        marginRight: 3,
    },

    noteIconCar: {
        marginLeft: 15,
    },

    message: {
        color: colors.grey,
        marginVertical: 5,
        fontSize: 16,
    },

    noReview: {
        color: 'white',
    }
});

export default avis;

