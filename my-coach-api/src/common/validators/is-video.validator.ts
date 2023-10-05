import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';

export const IsVideo = <T>(validationOptions?: ValidationOptions) => {
  return (object: T, propertyName: string) => {
    registerDecorator({
      name: 'isVideo',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        async validate(video) {
          if (!video) {
            return true;
          }

          const { mimetype } = await video;

          return mimetype.startsWith('video/');
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must be a video file`;
        },
      },
    });
  };
};
