export const translations = {
  en: {
    header: {
      features: 'Features',
      demo: 'Demo',
      contact: 'Contact',
      language: 'Español',
    },
    hero: {
      title: 'Reclaim Your Inbox.',
      subtitle: 'AI-Powered Summaries',
      description: 'Stop drowning in emails. Ignavia uses advanced AI to summarize your threads, giving you the gist in seconds so you can focus on what truly matters.',
    },
    features: {
      title: 'The Future of Email is Here',
      description: 'Ignavia is more than an app; it\'s your personal email assistant designed for efficiency and clarity.',
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
          description: 'Ignavia doesn\'t just read emails. It also analyzes attachments like PDFs and documents to include their key points in the summary.',
        },
      },
    },
    mockup: {
      title: 'See Ignavia in Action',
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
      description: 'Sign up for access to Ignavia and experience the future of email. As a bonus, you\'ll get <b>5 free message summaries</b> instantly!',
      form: {
        placeholder: 'Enter your email address',
        error: 'Please enter a valid email address.',
        errorApi: 'Something went wrong. Please try again.',
        success: 'Success! Check your email for access instructions.',
        loading: 'Signing Up...',
        button: 'Get Access Now',
      },
    },
    footer: {
      tagline: 'Reclaim Your Inbox.',
    },
  },
  es: {
    header: {
      features: 'Características',
      demo: 'Demostración',
      contact: 'Contacto',
      language: 'English',
    },
    hero: {
      title: 'Recupera tu Bandeja de Entrada.',
      subtitle: 'Resúmenes con IA',
      description: 'Deja de ahogarte en correos. Ignavia usa IA avanzada para resumir tus hilos, dándote lo esencial en segundos para que puedas enfocarte en lo que realmente importa.',
    },
    features: {
      title: 'El Futuro del Email está Aquí',
      description: 'Ignavia es más que una app; es tu asistente personal de email diseñado para la eficiencia y claridad.',
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
          description: 'Ignavia no solo lee correos. También analiza archivos adjuntos como PDFs y documentos para incluir sus puntos clave en el resumen.',
        },
      },
    },
    mockup: {
      title: 'Mira a Ignavia en Acción',
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
      description: 'Regístrate para obtener acceso a Ignavia y experimenta el futuro del correo electrónico. ¡y obtén <b>5 resúmenes de mensajes gratis</b> ahora, incluidos resúmenes con adjuntos!',
      form: {
        placeholder: 'Ingresa tu dirección de correo electrónico',
        error: 'Por favor, ingresa una dirección de correo electrónico válida.',
        errorApi: 'Algo salió mal. Por favor, inténtalo de nuevo.',
        success: '¡Éxito! Revisa tu correo para obtener instrucciones de acceso.',
        loading: 'Registrando...',
        button: 'Obtener Acceso Ahora',
      },
    },
    footer: {
      tagline: 'Recupera tu Bandeja de Entrada.',
    },
  },
};