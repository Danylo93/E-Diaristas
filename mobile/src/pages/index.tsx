import React from 'react';
import { View, Text } from 'react-native';
import {
    MainContainer,
    RegisterContainer,
    RegisterButtonsContainer,
    TitleStyled,
    ParagraphStyled,
    RoundedButtonStyled,
    LoginContainer,
    RoundedButtonLogin,
    BackgroundStyled,
    GradientBackground,
} from '@styles/pages/index.styled';
import BackgroundImage from '@assets/img/background/cleaning.jpg';
import { useTheme } from '@emotion/react';

const Index = () => {
    const { colors } = useTheme();

    return (
        <View style={{ flex: 1 }}>
            <MainContainer>
                <RegisterContainer>
                    <View>
                        <TitleStyled>Crie uma conta</TitleStyled>
                        <ParagraphStyled>
                            Você quer encontrar profissionais ou cadastrar seus
                            serviços?
                        </ParagraphStyled>
                    </View>
                    <RegisterButtonsContainer>
                        <RoundedButtonStyled mode={'contained'} fullWidth>
                            Encontrar Diarista
                        </RoundedButtonStyled>
                        <RoundedButtonStyled mode={'contained'} fullWidth>
                            Ser Diarista
                        </RoundedButtonStyled>
                    </RegisterButtonsContainer>
                </RegisterContainer>
                <LoginContainer>
                    <RoundedButtonLogin fullWidth>
                        Já possuo uma conta
                    </RoundedButtonLogin>
                </LoginContainer>
            </MainContainer>
            <BackgroundStyled source={BackgroundImage}>
                <GradientBackground
                    colors={[colors.secondary, colors.primary]}
                />
            </BackgroundStyled>
        </View>
    );
};

export default Index;
