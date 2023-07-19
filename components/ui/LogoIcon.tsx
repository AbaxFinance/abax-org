import { cva } from 'class-variance-authority';
import { FC, memo, SVGProps } from 'react';

type LogoIconProps = SVGProps<SVGSVGElement> & {
  variant?: 'light' | 'dark' | 'ghost';
};

const LogoIcon: FC<LogoIconProps> = ({ variant, ...props }) => {
  if (variant === 'dark')
    return (
      <svg width="116" height="34" viewBox="0 0 116 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_268_8201)">
          <path
            d="M34.085 8.13526C34.085 3.64958 30.4247 0 25.9259 0C21.9077 0 18.5589 2.91074 17.8886 6.72897H16.1954C15.526 2.91074 12.1772 0 8.15902 0C3.66024 0 0 3.64958 0 8.13526C0 12.1587 2.9443 15.5085 6.79695 16.1563V17.8419C2.9443 18.4915 0 21.8413 0 25.8647C0 30.3504 3.66024 34 8.15902 34C12.2193 34 15.5958 31.0277 16.216 27.1506H17.8689C18.4891 31.0277 21.8657 34 25.9259 34C30.4247 34 34.085 30.3504 34.085 25.8647C34.085 21.8163 31.104 18.4496 27.2155 17.8312V16.1697C31.104 15.5513 34.085 12.1846 34.085 8.13616V8.13526ZM25.9259 2.57166C29.0027 2.57166 31.5058 5.06747 31.5058 8.13526C31.5058 11.2031 29.0027 13.6989 25.9259 13.6989C22.8492 13.6989 20.347 11.2039 20.3461 8.13705V8.13348C20.347 5.06658 22.8501 2.57166 25.9259 2.57166ZM2.57917 8.13526C2.57917 5.06747 5.08227 2.57166 8.15902 2.57166C10.7489 2.57166 12.9316 4.34024 13.5581 6.72897H8.36933L6.62602 9.30063H13.6145C13.0757 11.8107 10.8348 13.6989 8.15902 13.6989C5.08227 13.6989 2.57917 11.2031 2.57917 8.13526ZM8.15902 31.4274C5.08227 31.4274 2.57917 28.9316 2.57917 25.8638C2.57917 22.7961 4.98294 20.4029 7.97377 20.3047H8.34516C11.336 20.4029 13.7398 22.8576 13.7398 25.8638C13.7398 28.8701 11.2367 31.4274 8.15991 31.4274H8.15902ZM9.37612 17.8187V16.1795C12.9191 15.6486 15.7229 12.8387 16.2348 9.29974H17.851C18.3585 12.8146 21.1283 15.6102 24.6364 16.1679V17.8294C21.1685 18.3809 18.422 21.1194 17.8689 24.5771H16.216C15.6594 21.0953 12.8788 18.3425 9.37612 17.8178V17.8187ZM31.5058 25.8638C31.5058 28.9316 29.0027 31.4274 25.9259 31.4274C23.2931 31.4274 21.0817 29.5991 20.4982 27.1497H25.4865L27.2155 24.578H20.4982C21.0683 22.1866 23.1902 20.3886 25.7407 20.3047H26.1121C29.1029 20.4029 31.5067 22.8576 31.5067 25.8638H31.5058Z"
            fill="black"
          />
          <path
            d="M55.9978 11.3531C54.5445 9.99766 52.5935 9.16602 50.4511 9.16602C45.9702 9.16602 42.3252 12.8004 42.3252 17.2683C42.3252 21.7361 45.9702 25.3705 50.4511 25.3705C52.5935 25.3705 54.5445 24.5389 55.9978 23.1834V24.8994H58.577V9.33466H55.9978V11.3531ZM50.4511 22.7989C47.3931 22.7989 44.9044 20.3182 44.9044 17.2683C44.9044 14.2183 47.3923 11.7377 50.4511 11.7377C53.5099 11.7377 55.9978 14.2183 55.9978 17.2683C55.9978 20.3182 53.5099 22.7989 50.4511 22.7989Z"
            fill="black"
          />
          <path
            d="M92.0398 11.3531C90.5865 9.99766 88.6355 9.16602 86.4931 9.16602C82.0122 9.16602 78.3672 12.8004 78.3672 17.2683C78.3672 21.7361 82.0122 25.3705 86.4931 25.3705C88.6355 25.3705 90.5865 24.5389 92.0398 23.1834V24.8994H94.619V9.33466H92.0398V11.3531ZM86.4931 22.7989C83.4351 22.7989 80.9464 20.3182 80.9464 17.2683C80.9464 14.2183 83.4342 11.7377 86.4931 11.7377C89.5519 11.7377 92.0398 14.2183 92.0398 17.2683C92.0398 20.3182 89.5519 22.7989 86.4931 22.7989Z"
            fill="black"
          />
          <path
            d="M68.957 8.86339C66.8145 8.86339 64.8636 9.69503 63.4102 11.0505V2.68408H60.8311V24.8992H63.4102V22.8808C64.8636 24.2362 66.8145 25.0679 68.957 25.0679C73.4378 25.0679 77.0829 21.4335 77.0829 16.9656C77.0829 12.4978 73.4378 8.86339 68.957 8.86339ZM68.957 22.4962C65.899 22.4962 63.4102 20.0156 63.4102 16.9656C63.4102 13.9157 65.8981 11.435 68.957 11.435C72.0158 11.435 74.5037 13.9157 74.5037 16.9656C74.5037 20.0156 72.0158 22.4962 68.957 22.4962Z"
            fill="black"
          />
          <path
            d="M109.804 24.8993H112.963L107.434 17.1085L112.666 9.35066L112.642 9.33459H109.569L105.18 15.8414H103.914L99.5254 9.33459H96.4522L96.4281 9.35066L101.661 17.1085L96.1318 24.8993H99.2909L103.894 18.413H105.2L109.804 24.8993Z"
            fill="black"
          />
          <path
            d="M114.276 10.2073C114.276 9.70848 114.611 9.33459 115.14 9.33459C115.669 9.33459 116.001 9.70758 116.001 10.2073C116.001 10.707 115.669 11.0773 115.14 11.0773C114.611 11.0773 114.276 10.7061 114.276 10.2073ZM115.884 10.2073C115.884 9.77808 115.595 9.42829 115.14 9.42829C114.684 9.42829 114.394 9.77808 114.394 10.2073C114.394 10.6365 114.682 10.9836 115.14 10.9836C115.598 10.9836 115.884 10.6338 115.884 10.2073ZM115.142 9.84589C114.897 9.84589 114.83 10.0208 114.83 10.2073C114.83 10.3938 114.896 10.5669 115.142 10.5669C115.359 10.5669 115.413 10.4179 115.423 10.3527H115.587C115.572 10.5606 115.414 10.7302 115.153 10.7302C114.84 10.7302 114.667 10.516 114.667 10.2073C114.667 9.89854 114.83 9.6826 115.135 9.6826C115.399 9.6826 115.562 9.85303 115.587 10.0583H115.423C115.414 10.002 115.359 9.84589 115.142 9.84589Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_268_8201">
            <rect width="116" height="34" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  if (variant === 'ghost')
    return (
      <svg width="116" height="34" viewBox="0 0 116 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_268_8201)">
          <path
            d="M34.085 8.13526C34.085 3.64958 30.4247 0 25.9259 0C21.9077 0 18.5589 2.91074 17.8886 6.72897H16.1954C15.526 2.91074 12.1772 0 8.15902 0C3.66024 0 0 3.64958 0 8.13526C0 12.1587 2.9443 15.5085 6.79695 16.1563V17.8419C2.9443 18.4915 0 21.8413 0 25.8647C0 30.3504 3.66024 34 8.15902 34C12.2193 34 15.5958 31.0277 16.216 27.1506H17.8689C18.4891 31.0277 21.8657 34 25.9259 34C30.4247 34 34.085 30.3504 34.085 25.8647C34.085 21.8163 31.104 18.4496 27.2155 17.8312V16.1697C31.104 15.5513 34.085 12.1846 34.085 8.13616V8.13526ZM25.9259 2.57166C29.0027 2.57166 31.5058 5.06747 31.5058 8.13526C31.5058 11.2031 29.0027 13.6989 25.9259 13.6989C22.8492 13.6989 20.347 11.2039 20.3461 8.13705V8.13348C20.347 5.06658 22.8501 2.57166 25.9259 2.57166ZM2.57917 8.13526C2.57917 5.06747 5.08227 2.57166 8.15902 2.57166C10.7489 2.57166 12.9316 4.34024 13.5581 6.72897H8.36933L6.62602 9.30063H13.6145C13.0757 11.8107 10.8348 13.6989 8.15902 13.6989C5.08227 13.6989 2.57917 11.2031 2.57917 8.13526ZM8.15902 31.4274C5.08227 31.4274 2.57917 28.9316 2.57917 25.8638C2.57917 22.7961 4.98294 20.4029 7.97377 20.3047H8.34516C11.336 20.4029 13.7398 22.8576 13.7398 25.8638C13.7398 28.8701 11.2367 31.4274 8.15991 31.4274H8.15902ZM9.37612 17.8187V16.1795C12.9191 15.6486 15.7229 12.8387 16.2348 9.29974H17.851C18.3585 12.8146 21.1283 15.6102 24.6364 16.1679V17.8294C21.1685 18.3809 18.422 21.1194 17.8689 24.5771H16.216C15.6594 21.0953 12.8788 18.3425 9.37612 17.8178V17.8187ZM31.5058 25.8638C31.5058 28.9316 29.0027 31.4274 25.9259 31.4274C23.2931 31.4274 21.0817 29.5991 20.4982 27.1497H25.4865L27.2155 24.578H20.4982C21.0683 22.1866 23.1902 20.3886 25.7407 20.3047H26.1121C29.1029 20.4029 31.5067 22.8576 31.5067 25.8638H31.5058Z"
            fill="#9D9D9D"
          />
          <path
            d="M55.9978 11.3531C54.5445 9.99766 52.5935 9.16602 50.4511 9.16602C45.9702 9.16602 42.3252 12.8004 42.3252 17.2683C42.3252 21.7361 45.9702 25.3705 50.4511 25.3705C52.5935 25.3705 54.5445 24.5389 55.9978 23.1834V24.8994H58.577V9.33466H55.9978V11.3531ZM50.4511 22.7989C47.3931 22.7989 44.9044 20.3182 44.9044 17.2683C44.9044 14.2183 47.3923 11.7377 50.4511 11.7377C53.5099 11.7377 55.9978 14.2183 55.9978 17.2683C55.9978 20.3182 53.5099 22.7989 50.4511 22.7989Z"
            fill="#9D9D9D"
          />
          <path
            d="M92.0398 11.3531C90.5865 9.99766 88.6355 9.16602 86.4931 9.16602C82.0122 9.16602 78.3672 12.8004 78.3672 17.2683C78.3672 21.7361 82.0122 25.3705 86.4931 25.3705C88.6355 25.3705 90.5865 24.5389 92.0398 23.1834V24.8994H94.619V9.33466H92.0398V11.3531ZM86.4931 22.7989C83.4351 22.7989 80.9464 20.3182 80.9464 17.2683C80.9464 14.2183 83.4342 11.7377 86.4931 11.7377C89.5519 11.7377 92.0398 14.2183 92.0398 17.2683C92.0398 20.3182 89.5519 22.7989 86.4931 22.7989Z"
            fill="#9D9D9D"
          />
          <path
            d="M68.957 8.86339C66.8145 8.86339 64.8636 9.69503 63.4102 11.0505V2.68408H60.8311V24.8992H63.4102V22.8808C64.8636 24.2362 66.8145 25.0679 68.957 25.0679C73.4378 25.0679 77.0829 21.4335 77.0829 16.9656C77.0829 12.4978 73.4378 8.86339 68.957 8.86339ZM68.957 22.4962C65.899 22.4962 63.4102 20.0156 63.4102 16.9656C63.4102 13.9157 65.8981 11.435 68.957 11.435C72.0158 11.435 74.5037 13.9157 74.5037 16.9656C74.5037 20.0156 72.0158 22.4962 68.957 22.4962Z"
            fill="#9D9D9D"
          />
          <path
            d="M109.804 24.8993H112.963L107.434 17.1085L112.666 9.35066L112.642 9.33459H109.569L105.18 15.8414H103.914L99.5254 9.33459H96.4522L96.4281 9.35066L101.661 17.1085L96.1318 24.8993H99.2909L103.894 18.413H105.2L109.804 24.8993Z"
            fill="#9D9D9D"
          />
          <path
            d="M114.276 10.2073C114.276 9.70848 114.611 9.33459 115.14 9.33459C115.669 9.33459 116.001 9.70758 116.001 10.2073C116.001 10.707 115.669 11.0773 115.14 11.0773C114.611 11.0773 114.276 10.7061 114.276 10.2073ZM115.884 10.2073C115.884 9.77808 115.595 9.42829 115.14 9.42829C114.684 9.42829 114.394 9.77808 114.394 10.2073C114.394 10.6365 114.682 10.9836 115.14 10.9836C115.598 10.9836 115.884 10.6338 115.884 10.2073ZM115.142 9.84589C114.897 9.84589 114.83 10.0208 114.83 10.2073C114.83 10.3938 114.896 10.5669 115.142 10.5669C115.359 10.5669 115.413 10.4179 115.423 10.3527H115.587C115.572 10.5606 115.414 10.7302 115.153 10.7302C114.84 10.7302 114.667 10.516 114.667 10.2073C114.667 9.89854 114.83 9.6826 115.135 9.6826C115.399 9.6826 115.562 9.85303 115.587 10.0583H115.423C115.414 10.002 115.359 9.84589 115.142 9.84589Z"
            fill="#9D9D9D"
          />
        </g>
        <defs>
          <clipPath id="clip0_268_8201">
            <rect width="116" height="34" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  return (
    <svg width="116" height="34" viewBox="0 0 116 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_268_7577)">
        <path
          d="M34.0851 8.13526C34.0851 3.64958 30.4248 0 25.9261 0C21.9079 0 18.559 2.91074 17.8888 6.72897H16.1956C15.5262 2.91074 12.1773 0 8.15914 0C3.66036 0 0.00012207 3.64958 0.00012207 8.13526C0.00012207 12.1587 2.94442 15.5085 6.79707 16.1563V17.8419C2.94442 18.4915 0.00012207 21.8413 0.00012207 25.8647C0.00012207 30.3504 3.66036 34 8.15914 34C12.2194 34 15.596 31.0277 16.2161 27.1506H17.8691C18.4892 31.0277 21.8658 34 25.9261 34C30.4248 34 34.0851 30.3504 34.0851 25.8647C34.0851 21.8163 31.1041 18.4496 27.2156 17.8312V16.1697C31.1041 15.5513 34.0851 12.1846 34.0851 8.13616V8.13526ZM25.9261 2.57166C29.0028 2.57166 31.5059 5.06747 31.5059 8.13526C31.5059 11.2031 29.0028 13.6989 25.9261 13.6989C22.8493 13.6989 20.3471 11.2039 20.3462 8.13705V8.13348C20.3471 5.06658 22.8502 2.57166 25.9261 2.57166ZM2.57929 8.13526C2.57929 5.06747 5.08239 2.57166 8.15914 2.57166C10.7491 2.57166 12.9318 4.34024 13.5582 6.72897H8.36945L6.62614 9.30063H13.6146C13.0759 11.8107 10.835 13.6989 8.15914 13.6989C5.08239 13.6989 2.57929 11.2031 2.57929 8.13526ZM8.15914 31.4274C5.08239 31.4274 2.57929 28.9316 2.57929 25.8638C2.57929 22.7961 4.98306 20.4029 7.97389 20.3047H8.34529C11.3361 20.4029 13.7399 22.8576 13.7399 25.8638C13.7399 28.8701 11.2368 31.4274 8.16004 31.4274H8.15914ZM9.37624 17.8187V16.1795C12.9192 15.6486 15.723 12.8387 16.2349 9.29974H17.8512C18.3586 12.8146 21.1284 15.6102 24.6365 16.1679V17.8294C21.1686 18.3809 18.4221 21.1194 17.8691 24.5771H16.2161C15.6595 21.0953 12.879 18.3425 9.37624 17.8178V17.8187ZM31.5059 25.8638C31.5059 28.9316 29.0028 31.4274 25.9261 31.4274C23.2932 31.4274 21.0818 29.5991 20.4984 27.1497H25.4867L27.2156 24.578H20.4984C21.0684 22.1866 23.1903 20.3886 25.7408 20.3047H26.1122C29.103 20.4029 31.5068 22.8576 31.5068 25.8638H31.5059Z"
          fill="white"
        />
        <path
          d="M55.9978 11.3531C54.5445 9.99766 52.5935 9.16602 50.4511 9.16602C45.9702 9.16602 42.3252 12.8004 42.3252 17.2683C42.3252 21.7361 45.9702 25.3705 50.4511 25.3705C52.5935 25.3705 54.5445 24.5389 55.9978 23.1834V24.8994H58.577V9.33466H55.9978V11.3531ZM50.4511 22.7989C47.3931 22.7989 44.9044 20.3182 44.9044 17.2683C44.9044 14.2183 47.3923 11.7377 50.4511 11.7377C53.5099 11.7377 55.9978 14.2183 55.9978 17.2683C55.9978 20.3182 53.5099 22.7989 50.4511 22.7989Z"
          fill="white"
        />
        <path
          d="M92.0398 11.3531C90.5865 9.99766 88.6355 9.16602 86.4931 9.16602C82.0122 9.16602 78.3672 12.8004 78.3672 17.2683C78.3672 21.7361 82.0122 25.3705 86.4931 25.3705C88.6355 25.3705 90.5865 24.5389 92.0398 23.1834V24.8994H94.619V9.33466H92.0398V11.3531ZM86.4931 22.7989C83.4351 22.7989 80.9464 20.3182 80.9464 17.2683C80.9464 14.2183 83.4342 11.7377 86.4931 11.7377C89.5519 11.7377 92.0398 14.2183 92.0398 17.2683C92.0398 20.3182 89.5519 22.7989 86.4931 22.7989Z"
          fill="white"
        />
        <path
          d="M68.957 8.86339C66.8145 8.86339 64.8636 9.69503 63.4102 11.0505V2.68408H60.8311V24.8992H63.4102V22.8808C64.8636 24.2362 66.8145 25.0679 68.957 25.0679C73.4378 25.0679 77.0829 21.4335 77.0829 16.9656C77.0829 12.4978 73.4378 8.86339 68.957 8.86339ZM68.957 22.4962C65.899 22.4962 63.4102 20.0156 63.4102 16.9656C63.4102 13.9157 65.8981 11.435 68.957 11.435C72.0158 11.435 74.5037 13.9157 74.5037 16.9656C74.5037 20.0156 72.0158 22.4962 68.957 22.4962Z"
          fill="white"
        />
        <path
          d="M109.804 24.8993H112.963L107.434 17.1085L112.666 9.35066L112.642 9.33459H109.569L105.18 15.8414H103.914L99.5254 9.33459H96.4522L96.4281 9.35066L101.661 17.1085L96.1318 24.8993H99.2909L103.894 18.413H105.2L109.804 24.8993Z"
          fill="white"
        />
        <path
          d="M114.276 10.2073C114.276 9.70848 114.611 9.33459 115.14 9.33459C115.669 9.33459 116.001 9.70758 116.001 10.2073C116.001 10.707 115.669 11.0773 115.14 11.0773C114.611 11.0773 114.276 10.7061 114.276 10.2073ZM115.884 10.2073C115.884 9.77808 115.595 9.42829 115.14 9.42829C114.684 9.42829 114.394 9.77808 114.394 10.2073C114.394 10.6365 114.682 10.9836 115.14 10.9836C115.598 10.9836 115.884 10.6338 115.884 10.2073ZM115.142 9.84589C114.897 9.84589 114.83 10.0208 114.83 10.2073C114.83 10.3938 114.896 10.5669 115.142 10.5669C115.359 10.5669 115.413 10.4179 115.423 10.3527H115.587C115.572 10.5606 115.414 10.7302 115.153 10.7302C114.84 10.7302 114.667 10.516 114.667 10.2073C114.667 9.89854 114.83 9.6826 115.135 9.6826C115.399 9.6826 115.562 9.85303 115.587 10.0583H115.423C115.414 10.002 115.359 9.84589 115.142 9.84589Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_268_7577">
          <rect width="116" height="34" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const Memo = memo(LogoIcon);
export { Memo as LogoIcon };