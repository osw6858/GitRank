import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
    }),
  ],
  // 필요한 경우 여기에 추가 옵션을 설정할 수 있습니다.
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};
