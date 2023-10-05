import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';

export const IsImage = <T>(validationOptions?: ValidationOptions) => {
  return (object: T, propertyName: string) => {
    registerDecorator({
      name: 'isImage',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        async validate(image) {
          if (!image) {
            return true;
          }

          const { mimetype } = await image;

          return mimetype.startsWith('image/');
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must be an image file`;
        },
      },
    });
  };
};
