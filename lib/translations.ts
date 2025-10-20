
export const translations = {
  en: {
    header: {
      features: 'Features',
      demo: 'Demo',
      contact: 'Contact',
      language: 'Español',
      privacyPolicy: 'Privacy Policy',
    },
    hero: {
      title: 'Reclaim Your Inbox.',
      subtitle: 'AI-Powered Summaries',
      description: 'Stop drowning in emails. ergia uses advanced AI to summarize your threads, giving you the gist in seconds so you can focus on what truly matters.',
    },
    features: {
      title: 'The Future of Email is Here',
      description: 'ergia is more than an app; it\'s your personal email assistant designed for efficiency and clarity.',
      cards: {
        ai: {
          title: 'AI-Powered Summaries',
          description: 'Our intelligent algorithm reads through long email threads and extracts the key points, actions, and decisions for you.',
        },
        time: {
          title: 'Save Hours Weekly',
          description: 'Cut down on inbox time and get back to productive work. Spend minutes, not hours, catching up on your emails.',
        },
        secure: {
          title: 'Secure & Private',
          description: 'Your data is your own. We prioritize your privacy with end-to-end encryption and secure processing.',
        },
        attachments: {
          title: 'Attachment Analysis',
          description: 'ergia doesn\'t just read emails. It also analyzes attachments like PDFs and documents to include their key points in the summary.',
        },
      },
    },
    mockup: {
      title: 'See ergia in Action',
      description: 'A clean, intuitive interface that puts summaries front and center.',
      items: {
        item1: {
          sidebar: { title: 'Q3 Project Kick-off', preview: 'Hey team, let\'s get the ball rolling on...' },
          main: {
            title: 'Q3 Project Kick-off',
            summaryTitle: 'AI Summary',
            summaryPoints: {
              goal: '<b>Goal:</b> Launch the new dashboard by end of Q3.',
              people: '<b>Key People:</b> Alice (Design), Bob (Eng), Carol (Marketing).',
              action: '<b>Action Item (Bob):</b> Finalize tech stack by this Friday.',
              decision: '<b>Decision:</b> We will proceed with the React framework.',
            },
            originalThread: 'Original Thread (12 messages)',
          },
        },
        item2: {
          sidebar: { title: 'Server Maintenance', preview: 'Just a heads up about the upcoming...' },
          main: {
            title: 'Server Maintenance',
            summaryTitle: 'AI Summary',
            summaryPoints: {
              info: '<b>Info:</b> Planned server maintenance this weekend.',
              impact: '<b>Impact:</b> Intermittent downtime expected for internal tools.',
              action: '<b>Action:</b> No action required from most users. Eng team to monitor.',
              time: '<b>Time:</b> Saturday, 10 PM to Sunday, 2 AM PST.',
            },
            originalThread: 'Original Thread (3 messages)',
          },
        },
        item3: {
          sidebar: { title: 'Marketing Budget', preview: 'Can you please review the attached...' },
          main: {
            title: 'Marketing Budget',
            summaryTitle: 'AI Summary',
            summaryPoints: {
              request: '<b>Request:</b> Review the attached Q4 marketing budget proposal.',
              from: '<b>From:</b> Carol (Marketing).',
              action: '<b>Action Item:</b> Provide feedback on the proposed ad spend allocation by EOD Wednesday.',
              attachment: '<b>Attachment:</b> <code class="bg-brand-bg-dark text-brand-accent px-2 py-1 rounded-md text-sm">Q4_Budget_Proposal.pdf</code> analyzed.',
            },
            originalThread: 'Original Thread (5 messages)',
          },
        },
      },
    },
    whitelist: {
      title: 'Sign Up Now',
      description: 'Sign up for access to ergia and experience the future of email. As a bonus, you\'ll get <b>10 free message summaries</b> instantly!',
      form: {
        placeholder: 'Enter your email address',
        error: 'Please enter a valid email address.',
        errorApi: 'Something went wrong. Please try again.',
        success: 'Success! Check your email for access instructions.',
        loading: 'Signing Up...',
        button: 'Get Access Now',
      },
    },
    contact: {
      title: 'Get in Touch',
      description: 'Have questions, feedback, or just want to say hello? We\'d love to hear from you. Drop us a line below.',
      form: {
        name: 'Your Name',
        email: 'Your Email',
        phone: 'Phone Number (Optional)',
        message: 'Your Message',
        button: 'Send Message',
        loading: 'Sending...',
        success: 'Message sent successfully! We\'ll get back to you soon.',
        error: 'An error occurred. Please try again.',
        errorValidation: 'Please fill out all required fields correctly.'
      }
    },
    footer: {
      tagline: 'Reclaim Your Inbox.',
      privacyPolicy: 'Privacy Policy',
    },
    privacyPolicyPage: {
      backToHome: 'Back to Home',
      title: 'Privacy Policy',
      lastUpdated: 'Last Updated',
      lastUpdatedDate: '2025-10-15',
      controller: {
        title: 'Data Controller:',
        line1: 'https://ergia.cl',
        link: 'https://ergia.cl',
        line2: 'Contact Email',
        email: 'contacto@ergia.cl',
      },
      section1: {
        title: '1. Information We Collect',
        subtitle: "User's email address:",
        content: 'We only collect the email address provided by the user when registering on our website or using our services. This information is necessary for account creation and the provision of our services.',
      },
      section2: {
        title: '2. Use of Information',
        intro: "We use the user's email address to:",
        point1: 'Create and manage their account on our website.',
        point2: 'Send notifications related to the use of our services.',
        point3: 'Provide user support and assistance.',
      },
      section3: {
        title: '3. Email Processing',
        subtitle1: 'Summarization and destruction:',
        content1: 'Emails that users upload to our system are processed to generate summaries using artificial intelligence. Once processed, these emails are automatically deleted and are not stored on our servers.',
        subtitle2: 'Attachments:',
        content2: 'We do not store or process attachments that users may include in their emails. These files are discarded immediately after being processed.',
        subtitle3: 'Express consent:',
        content3: 'If the user wishes for their emails to be stored for specific purposes, they must provide their express consent. In such cases, the information will be stored in accordance with the purposes for which consent was given.',
      },
      section4: {
        title: '4. Information Protection',
        content: 'We implement appropriate technical and organizational security measures to protect the user\'s personal information against unauthorized access, disclosure, alteration, or destruction.',
      },
      section5: {
        title: '5. User Rights',
        intro: 'The user has the right to:',
        point1: 'Access: Request information about the personal data we hold about them.',
        point2: 'Rectify: Correct inaccurate or incomplete personal data.',
        point3: 'Delete: Request the deletion of their personal data, subject to legal limitations.',
        point4: 'Revoke consent: Withdraw their consent at any time, without affecting the lawfulness of prior processing.',
        outro: 'To exercise these rights, the user can contact us via the email address contacto@ergia.cl.',
      },
      section6: {
        title: '6. Changes to this policy',
        content: 'We reserve the right to update this Privacy Policy at any time. Modifications will be posted on this page and will take effect immediately upon their publication.',
      },
      section7: {
        title: '7. Applicable Law',
        content: 'This Privacy Policy is governed by the laws of the Republic of Chile, in particular by Law No. 19,496 on the Protection of Consumer Rights and Law No. 19,628 on the Protection of Private Life.',
      },
    }
  },
  es: {
    header: {
      features: 'Características',
      demo: 'Demostración',
      contact: 'Contacto',
      language: 'English',
      privacyPolicy: 'Política de Privacidad',
    },
    hero: {
      title: 'Recupera tu Bandeja de Entrada.',
      subtitle: 'Resúmenes con IA',
      description: 'Deja de ahogarte en correos. ergia usa IA avanzada para resumir tus hilos, dándote lo esencial en segundos para que puedas enfocarte en lo que realmente importa.',
    },
    features: {
      title: 'El Futuro del Email está Aquí',
      description: 'ergia es más que una app; es tu asistente personal de email diseñado para la eficiencia y claridad.',
      cards: {
        ai: {
          title: 'Resúmenes con IA',
          description: 'Nuestro algoritmo inteligente lee hilos de correos largos y extrae los puntos clave, acciones y decisiones por ti.',
        },
        time: {
          title: 'Ahorra Horas Semanales',
          description: 'Reduce el tiempo en tu bandeja de entrada y vuelve al trabajo productivo. Tarda minutos, no horas, en ponerte al día con tus correos.',
        },
        secure: {
          title: 'Seguro y Privado',
          description: 'Tus datos son tuyos. Priorizamos tu privacidad con encriptación de extremo a extremo y procesamiento seguro.',
        },
        attachments: {
          title: 'Análisis de Adjuntos',
          description: 'Puedes analizar imagenes, pdf, ppt, txt, xls y seguiremos aumentando los tipos de archivos.',
        },
      },
    },
    mockup: {
      title: 'Mira a ergia en Acción',
      description: 'Nuestra interfaz convierte cadenas de emails y newsletters en resúmenes clave, eliminando lo irrelevante.',
      items: {
        item1: {
          sidebar: { title: 'Inicio Proyecto Q3', preview: 'Hola equipo, empecemos a trabajar en...' },
          main: {
            title: 'Inicio Proyecto Q3',
            summaryTitle: 'Resumen IA',
            summaryPoints: {
              goal: '<b>Objetivo:</b> Lanzar el nuevo dashboard para el fin del Q3.',
              people: '<b>Personas Clave:</b> Alice (Diseño), Bob (Ing.), Carol (Marketing).',
              action: '<b>Acción (Bob):</b> Finalizar stack tecnológico para este viernes.',
              decision: '<b>Decisión:</b> Procederemos con el framework React.',
            },
            originalThread: 'Hilo Original (12 mensajes)',
          },
        },
        item2: {
          sidebar: { title: 'Mantenimiento de Servidor', preview: 'Solo un aviso sobre el próximo...' },
          main: {
            title: 'Mantenimiento de Servidor',
            summaryTitle: 'Resumen IA',
            summaryPoints: {
              info: '<b>Info:</b> Mantenimiento de servidor planeado para este fin de semana.',
              impact: '<b>Impacto:</b> Se espera inactividad intermitente en herramientas internas.',
              action: '<b>Acción:</b> No se requiere acción de la mayoría de usuarios. Equipo de Ing. monitoreará.',
              time: '<b>Hora:</b> Sábado, 10 PM a Domingo, 2 AM PST.',
            },
            originalThread: 'Hilo Original (3 mensajes)',
          },
        },
        item3: {
          sidebar: { title: 'Presupuesto de Marketing', preview: 'Por favor, revisa el adjunto...' },
          main: {
            title: 'Presupuesto de Marketing',
            summaryTitle: 'Resumen IA',
            summaryPoints: {
              request: '<b>Solicitud:</b> Revisar la propuesta de presupuesto de marketing para el Q4 adjunta.',
              from: '<b>De:</b> Carol (Marketing).',
              action: '<b>Acción:</b> Proveer feedback sobre la asignación de gasto publicitario para el miércoles.',
              attachment: '<b>Adjunto:</b> <code class="bg-brand-bg-dark text-brand-accent px-2 py-1 rounded-md text-sm">Propuesta_Presupuesto_Q4.pdf</code> analizado.',
            },
            originalThread: 'Hilo Original (5 mensajes)',
          },
        },
      },
    },
    whitelist: {
      title: 'Regístrate Ahora',
      description: 'Regístrate para obtener acceso a ergia y experimenta el futuro del correo electrónico. ¡y obtén <b>10 resúmenes de mensajes gratis</b> ahora, incluidos resúmenes con adjuntos!',
      form: {
        placeholder: 'Ingresa tu dirección de correo electrónico',
        error: 'Por favor, ingresa una dirección de correo electrónico válida.',
        errorApi: 'Algo salió mal. Por favor, inténtalo de nuevo.',
        success: '¡Éxito! Revisa tu correo para obtener instrucciones de acceso.',
        loading: 'Registrando...',
        button: 'Obtener Acceso Ahora',
      },
    },
    contact: {
      title: 'Ponte en Contacto',
      description: '¿Tienes preguntas, comentarios o simplemente quieres saludar? Nos encantaría saber de ti. Escríbenos a continuación.',
      form: {
        name: 'Tu Nombre',
        email: 'Tu Correo Electrónico',
        phone: 'Número de Teléfono (Opcional)',
        message: 'Tu Mensaje',
        button: 'Enviar Mensaje',
        loading: 'Enviando...',
        success: '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.',
        error: 'Ocurrió un error. Por favor, inténtalo de nuevo.',
        errorValidation: 'Por favor, completa correctamente todos los campos obligatorios.'
      }
    },
    footer: {
      tagline: 'Recupera tu Bandeja de Entrada.',
      privacyPolicy: 'Política de Privacidad',
    },
    privacyPolicyPage: {
      backToHome: 'Volver al Inicio',
      title: 'Política de Privacidad',
      lastUpdated: 'Fecha de última actualización',
      lastUpdatedDate: '15-10-2025',
      controller: {
        title: 'Responsable del tratamiento de datos personales:',
        line1: 'https://ergia.cl',
        link: 'https://ergia.cl',
        line2: 'Correo electrónico de contacto',
        email: 'contacto@ergia.cl',
      },
      section1: {
        title: '1. Información que recopilamos',
        subtitle: 'Correo electrónico del usuario:',
        content: 'Recopilamos únicamente la dirección de correo electrónico proporcionada por el usuario al registrarse en nuestro sitio web o al utilizar nuestros servicios. Esta información es necesaria para la creación de una cuenta y para la prestación de nuestros servicios.',
      },
      section2: {
        title: '2. Uso de la información',
        intro: 'Utilizamos la dirección de correo electrónico del usuario para:',
        point1: 'Crear y gestionar su cuenta en nuestro sitio web.',
        point2: 'Enviar notificaciones relacionadas con el uso de nuestros servicios.',
        point3: 'Proporcionar soporte y asistencia al usuario.',
      },
      section3: {
        title: '3. Procesamiento de correos electrónicos',
        subtitle1: 'Resumido y destrucción:',
        content1: 'Los correos electrónicos que los usuarios cargan en nuestro sistema son procesados para generar resúmenes mediante inteligencia artificial. Una vez procesados, estos correos electrónicos son eliminados de forma automática y no se almacenan en nuestros servidores.',
        subtitle2: 'Adjuntos:',
        content2: 'No almacenamos ni procesamos los archivos adjuntos que los usuarios puedan incluir en los correos electrónicos. Estos archivos son descartados inmediatamente después de ser procesados.',
        subtitle3: 'Consentimiento expreso:',
        content3: 'En caso de que el usuario desee que sus correos electrónicos sean almacenados para fines específicos, deberá otorgar su consentimiento expreso. En tal caso, la información será almacenada de acuerdo con las finalidades para las cuales se otorgó el consentimiento.',
      },
      section4: {
        title: '4. Protección de la información',
        content: 'Implementamos medidas de seguridad técnicas y organizativas adecuadas para proteger la información personal del usuario contra acceso no autorizado, divulgación, alteración o destrucción.',
      },
      section5: {
        title: '5. Derechos del usuario',
        intro: 'El usuario tiene derecho a:',
        point1: 'Acceder: Solicitar información sobre los datos personales que tenemos sobre él.',
        point2: 'Rectificar: Corregir datos personales inexactos o incompletos.',
        point3: 'Eliminar: Solicitar la eliminación de sus datos personales, sujeto a las limitaciones legales.',
        point4: 'Revocar el consentimiento: Retirar su consentimiento en cualquier momento, sin que ello afecte la legalidad del tratamiento previo.',
        outro: 'Para ejercer estos derechos, el usuario puede ponerse en contacto con nosotros a través del correo electrónico contacto@ergia.cl.',
      },
      section6: {
        title: '6. Modificaciones a esta política',
        content: 'Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Las modificaciones serán publicadas en esta página y entrarán en vigor inmediatamente después de su publicación.',
      },
      section7: {
        title: '7. Legislación aplicable',
        content: 'Esta Política de Privacidad se rige por las leyes de la República de Chile, en particular por la Ley N° 19.496 sobre Protección de los Derechos de los Consumidores y la Ley N° 19.628 sobre Protección de la Vida Privada.',
      },
    }
  },
};
