<script setup lang="ts">
import { useForm } from 'vee-validate';

import { router } from '@/app/providers';
import type { SignInUserVariables } from '@/shared/api/auth';
import { useTranslation } from '@/shared/lib/localization';
import IconInput from '@/shared/ui/icon-input';
import { EmailIcon, PasswordIcon } from '@/shared/ui/icons';
import { signInValidationSchema } from '../config';
import { useSignIn } from '../lib';
import './styles.scss';

const { values } = useForm<SignInUserVariables>({
  validationSchema: signInValidationSchema,
});

const { t } = useTranslation();

const { signIn, isLoading } = useSignIn();

const handleLogin = async (loginData: SignInUserVariables) => {
  await signIn(loginData).then(() => {
    router.push('/');
  });
};

const handleSubmit = () => handleLogin({ email: values.email, password: values.password });
</script>

<template>
  <section class="login-wrap-form">
    <el-text class="login-wrap-form-title">{{ t('login.title') }}</el-text>
    <el-form label-position="top" @submit.prevent="handleSubmit">
      <IconInput
        name="email"
        size="large"
        :placeholder="t('placeholders.email')"
        :label="t('labels.email')"
      >
        <template v-slot:icon>
          <EmailIcon class="input-icon" />
        </template>
      </IconInput>
      <IconInput
        name="password"
        size="large"
        :is-password="true"
        :placeholder="t('placeholders.password')"
        :label="t('labels.password')"
      >
        <template v-slot:icon>
          <PasswordIcon class="input-icon" />
        </template>
      </IconInput>
      <el-form-item class="button-wrapper">
        <el-button native-type="submit" type="primary" :loading="isLoading">
          {{ t('login.title') }}
        </el-button>
      </el-form-item>
    </el-form>
  </section>
</template>
